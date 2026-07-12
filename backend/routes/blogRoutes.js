import express from 'express'

import Blog from '../models/Blog.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })

    res.json({
      success: true,
      count: blogs.length,
      blogs,
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
    const blog = await Blog.findById(req.params.id)

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found.',
      })
    }

    res.json({
      success: true,
      blog,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Invalid blog ID.',
    })
  }
})

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { title, author, category, image, shortDescription, content } =
      req.body || {}

    if (!title || !author || !category || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title, author, category, and content are required.',
      })
    }

    const blog = await Blog.create({
      title,
      author,
      category,
      image: image || '',
      shortDescription: shortDescription || '',
      content,
    })

    res.status(201).json({
      success: true,
      message: 'Blog created successfully.',
      blog,
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
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found.',
      })
    }

    res.json({
      success: true,
      message: 'Blog updated successfully.',
      blog,
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
    const blog = await Blog.findByIdAndDelete(req.params.id)

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found.',
      })
    }

    res.json({
      success: true,
      message: 'Blog deleted successfully.',
      blog,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router