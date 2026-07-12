import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    image: {
      type: String,
      default: '',
    },
    shortDescription: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog