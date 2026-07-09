import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js'

import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Clicon real backend server is running',
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend health check successful',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/messages', messageRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})