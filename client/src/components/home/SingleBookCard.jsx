import { useState } from "react";
import { FaBookOpen, FaRegUserCircle, FaRegEdit, FaInfoCircle, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

const SingleBookCard = ({book}) => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div
          className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
        >
          <h2 className='absolute top-1 right-2 px-4 py-1 bg-slate-400 text-white rounded-lg'>
            {book.publishedYear}
          </h2>
          <h4 className='my-8 text-gray-500 font-semibold'>{book._id}</h4>
          <div className='flex justify-start items-center gap-x-2 mb-3'>
            <FaBookOpen className='text-2xl' />
            <h2 className='my-1 text-lg font-bold'>{book.title}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
            <FaRegUserCircle className='text-2xl' />
            <h2 className='my-1 text-lg font-bold'>{book.author}</h2>
          </div>
          <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <FaEye className = 'text-3xl hover:text-slate-700 cursor-pointer'
            onClick={()=>setShowModal(true)}/>
            <Link to={`/books/details/${book._id}`}>
              <FaInfoCircle className='text-2xl  hover:text-slate-700' />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <FaRegEdit className='text-2xl  hover:text-slate-700' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdDelete className='text-2xl  hover:text-slate-700' />
            </Link>
          </div>
          {showModal && <BookModal book={book} onClose={()=>setShowModal(false)}/>}
        </div>
  )
}

export default SingleBookCard