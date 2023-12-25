import mongoo from 'mongoose'

const bookSchema = new mongoo.Schema({
    title: { type: String, required: true }, 
    author: { type: String, required: true },
    publishedYear: {type : Number, required:true}
},{timestamps: true})

const BookModel = mongoo.model('Book', bookSchema);
export default BookModel;