import express from 'express'

import Product from '../models/Product.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 })

    res.json({
      success: true,
      count: products.length,
      products,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      })
    }

    res.json({
      success: true,
      product,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Invalid product ID.',
    })
  }
})

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const {
      name,
      price,
      oldPrice,
      category,
      stock,
      image,
      description,
      rating,
      reviews,
      isFeatured,
    } = req.body || {}

    if (!name || !price || !category || stock === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Name, price, category, and stock are required.',
      })
    }

    const product = await Product.create({
      name,
      price,
      oldPrice: oldPrice || 0,
      category,
      stock,
      image: image || '',
      description: description || '',
      rating: rating || 0,
      reviews: reviews || 0,
      isFeatured: isFeatured || false,
    })

    res.status(201).json({
      success: true,
      message: 'Product created successfully.',
      product,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      })
    }

    res.json({
      success: true,
      message: 'Product updated successfully.',
      product,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      })
    }

    res.json({
      success: true,
      message: 'Product deleted successfully.',
      product,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router