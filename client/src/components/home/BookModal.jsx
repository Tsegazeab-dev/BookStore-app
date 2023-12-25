import { IoClose } from "react-icons/io5";
import { FaBookOpen, FaRegUserCircle} from "react-icons/fa";

const BookModal = ({book, onClose}) => {
  return (
    <div
    className='fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
    onClick={onClose}
  >
    <div
      onClick={(event) => event.stopPropagation()}
      className='max-w-lg bg-white rounded-xl p-4 flex flex-col relative'
    >
      <IoClose
        className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
        onClick={onClose}
      />
    <h2 className='w-fit px-4 py-1 bg-slate-400 text-white rounded-lg'>
            {book.publishedYear}
          </h2>
          <h4 className='my-8 text-gray-500'>{book._id}</h4>
          <div className='flex justify-start items-center gap-x-2'>
            <FaBookOpen className='text-2xl' />
            <h2 className='my-1'>{book.title}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
            <FaRegUserCircle className='text-2xl' />
            <h2 className='my-1'>{book.author}</h2>
          </div>
      <p className='mt-4'>Anything You want to show</p>
      <p className='my-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
        voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
        necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
        nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
        dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
        vitae voluptate sequi repellat!
      </p>
    </div>
  </div>
  )
}

export default BookModal