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

