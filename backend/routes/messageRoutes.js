import express from 'express'

import Message from '../models/Message.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {}

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, subject, and message are required.',
      })
    }

    const supportMessage = await Message.create({
      name,
      email,
      subject,
      message,
    })

    res.status(201).json({
      success: true,
      message: 'Support message sent successfully.',
      supportMessage,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })

    res.json({
      success: true,
      count: messages.length,
      messages,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.put('/:id/read', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const supportMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { status: 'Read' },
      { new: true }
    )

    if (!supportMessage) {
      return res.status(404).json({
        success: false,
        message: 'Support message not found.',
      })
    }

    res.json({
      success: true,
      message: 'Message marked as read.',
      supportMessage,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router