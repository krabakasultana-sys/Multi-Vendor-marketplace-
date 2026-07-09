const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:    { type: String, required: true },
  rating:  { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    default: 0,
  },
  oldPrice: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  images: [{ type: String }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  badge: {
    type: String,
    enum: ['HOT', 'BEST DEALS', 'SALE', '25% OFF', 'SOLD OUT', ''],
    default: '',
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
