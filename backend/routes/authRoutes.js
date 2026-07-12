import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'
import VerificationCode from '../models/VerificationCode.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js'
import { generateSixDigitCode } from '../utils/generateCode.js'

const router = express.Router()

function createToken(user) {
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
}

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body || {}

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required.',
      })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email.',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'user',
      isVerified: false,
    })

    const code = generateSixDigitCode()

    await VerificationCode.create({
      email: user.email,
      code,
      purpose: 'email-verification',
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    })

    res.status(201).json({
      success: true,
      message: 'User registered successfully. Please verify your email.',
      verificationCodeForDemo: code,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.post('/verify-email', async (req, res) => {
  try {
    const { email, code } = req.body || {}

    if (!email || !code) {
      return res.status(400).json({
        success: false,
        message: 'Email and verification code are required.',
      })
    }

    const savedCode = await VerificationCode.findOne({
      email,
      code,
      purpose: 'email-verification',
    })

    if (!savedCode) {
      return res.status(400).json({
        success: false,
        message: 'Invalid verification code.',
      })
    }

    if (savedCode.expiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Verification code expired.',
      })
    }

    const user = await User.findOneAndUpdate(
      { email },
      { isVerified: true },
      { new: true }
    )

    await VerificationCode.deleteMany({
      email,
      purpose: 'email-verification',
    })

    res.json({
      success: true,
      message: 'Email verified successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      })
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: 'Please verify your email before login.',
      })
    }

    const token = createToken(user)

    res.json({
      success: true,
      message: 'Login successful.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body || {}

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No account found with this email.',
      })
    }

    const code = generateSixDigitCode()

    await VerificationCode.deleteMany({
      email,
      purpose: 'password-reset',
    })

    await VerificationCode.create({
      email,
      code,
      purpose: 'password-reset',
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    })

    res.json({
      success: true,
      message: 'Password reset code generated successfully.',
      resetCodeForDemo: code,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.post('/reset-password', async (req, res) => {
  try {
    const { email, code, newPassword } = req.body || {}

    if (!email || !code || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Email, code, and new password are required.',
      })
    }

    const savedCode = await VerificationCode.findOne({
      email,
      code,
      purpose: 'password-reset',
    })

    if (!savedCode) {
      return res.status(400).json({
        success: false,
        message: 'Invalid reset code.',
      })
    }

    if (savedCode.expiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Reset code expired.',
      })
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    )

    await VerificationCode.deleteMany({
      email,
      purpose: 'password-reset',
    })

    res.json({
      success: true,
      message: 'Password reset successfully. You can login with new password now.',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')

    res.json({
      success: true,
      user,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 })

    res.json({
      success: true,
      count: users.length,
      users,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router