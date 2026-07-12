import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, 'Product stock is required'],
      default: 100,
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    // --- extra fields merged in from teammate's product-detail/shop pages ---
    brand: { type: String, default: '' },
    sku: { type: String, default: '' },
    images: { type: [String], default: [] },
    reviewCount: { type: Number, default: 0 },
    discountPercent: { type: Number, default: 0 },
    features: { type: [String], default: [] },
    badge: { type: String, default: '' }, // e.g. "SALE", "NEW", "HOT"
    colorOptions: { type: [String], default: [] },
    sizeOptions: { type: [String], default: [] },
    memoryOptions: { type: [String], default: [] },
    storageOptions: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product