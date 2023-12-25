import { FaInfoCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const TableView = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-2 rounded shadow-lg bg-white mb-4">
            <thead>
              <tr className="text-center border-gap-2">
                <th className="border border-slate-700 rounded-md">No</th>
                <th className="border border-slate-700 rounded-md">Title</th>
                <th className="border border-slate-700 rounded-md">Author</th>
                <th className="border border-slate-700 rounded-md">Published Year</th>
                <th className="border border-slate-700 rounded-md">Operation</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index)=>(
                <tr key={index} className="text-center h-8">
                  <td className="border border-slate-700 rounded-md">{index + 1}</td>
                  <td className="border border-slate-700 rounded-md">{book.title}</td>
                  <td className="border border-slate-700 rounded-md">{book.author}</td>
                  <td className="border border-slate-700 rounded-md">{book.publishedYear}</td>
                  <td className="border border-slate-700 rounded-md">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <FaInfoCircle/>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <FaRegEdit/>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                      <MdDelete/>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}

export default TableView