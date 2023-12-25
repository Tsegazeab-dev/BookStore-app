import express from 'express'
import { addBooks, allBooks, getBookById, updateBook, deleteBook } from '../controllers/book.controller.js'

const router = express.Router()

router.post('/add-books', addBooks)
router.get('/all-books', allBooks)
router.get('/get-book/:id', getBookById)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

export default router;