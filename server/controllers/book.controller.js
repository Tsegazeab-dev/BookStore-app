import BookModel from "../models/book.model.js";
import { errorHandler } from "../utils/error.js";

export const addBooks = async (req, res, next)=>{
    const {title, author, publishedYear} = req.body
    if(!title || !author || !publishedYear) next(errorHandler(400, 'please fill all required fields'))
    
    try{
        const newBook = await BookModel.create( {title, author, publishedYear})
        res.status(201).send(newBook)
    
    }catch(err){
        next(err)
    }
}

export const allBooks = async (req, res, next) =>{
    try {
        const books = await BookModel.find({});
        res.status(200).send({count: books.length, data: books})
    } catch (error) {
        next(error)
    }
}


export const getBookById = async(req, res, next) =>{
    const id = req.params.id
    try {
        const book = await BookModel.findById(id)
        res.status(200).send(book)
    } catch (error) {
        next(error)
    }
}


export const updateBook = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const updatedBook = await BookModel.findByIdAndUpdate(id, {
            $set: {
                title: req.body.title,
                author: req.body.author,
                publishedYear: req.body.publishedYear,
              }
        }, {new: true})
        res.status(200).send(updatedBook)
    } catch (error) {
        next(error)
    }
}
