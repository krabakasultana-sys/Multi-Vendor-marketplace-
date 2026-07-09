const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const pageSize = Number(req.query.pageSize) || 12;
    const page     = Number(req.query.page)     || 1;
    const keyword  = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: 'i' } }
      : {};
    const category = req.query.category ? { category: req.query.category } : {};

    const count    = await Product.countDocuments({ ...keyword, ...category });
    const products = await Product.find({ ...keyword, ...category })
      .populate('category', 'name')
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ products, page, pages: Math.ceil(count / pageSize), total: count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product (Admin)
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  try {
    const { name, description, price, oldPrice, image, images, category, stock, badge } = req.body;
    const product = await Product.create({ name, description, price, oldPrice, image, images, category, stock, badge });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product (Admin)
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const { name, description, price, oldPrice, image, images, category, stock, badge } = req.body;
      product.name        = name        || product.name;
      product.description = description || product.description;
      product.price       = price       ?? product.price;
      product.oldPrice    = oldPrice    ?? product.oldPrice;
      product.image       = image       || product.image;
      product.images      = images      || product.images;
      product.category    = category    || product.category;
      product.stock       = stock       ?? product.stock;
      product.badge       = badge       ?? product.badge;
      const updated = await product.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete product (Admin)
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());
      if (alreadyReviewed) {
        return res.status(400).json({ message: 'Product already reviewed' });
      }
      const review = { user: req.user._id, name: req.user.name, rating: Number(rating), comment };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length;
      await product.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview };
