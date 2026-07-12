import express from 'express'
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.route('/')
  .get(getCategories)
  .post(authMiddleware, adminMiddleware, createCategory)

router.route('/:id')
  .get(getCategoryById)
  .put(authMiddleware, adminMiddleware, updateCategory)
  .delete(authMiddleware, adminMiddleware, deleteCategory)

export default router
