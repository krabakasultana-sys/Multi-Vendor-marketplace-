import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js'

import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js'
import compareRoutes from './routes/compareRoutes.js'

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
app.use('/api/cart', cartRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/wishlist', wishlistRoutes)
app.use('/api/compare', compareRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})