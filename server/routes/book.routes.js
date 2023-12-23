import express from 'express'
import { addBooks } from '../controllers/book.controller.js'

const router = express.Router()

router.post('/add-books', addBooks)

export default router;