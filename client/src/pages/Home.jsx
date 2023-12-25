import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from '../components/Spinner';
import { MdLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import TableView from "../components/home/TableView";
import CardView from "../components/home/CardView";

function Home() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [viewOption, setViewOption] = useState('card')
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/book/all-books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Axios error", err);
        setLoading(false);
      });
  }, []);

  return (
   
      <div className="p-4">
        <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-slate-500 hover:bg-slate-700 text-white px-4 py-1 rounded-lg '
          onClick={() => setViewOption('table')}
        >
          Table
        </button>
        <button
          className='bg-slate-500 hover:bg-slate-700 px-4 text-white py-1 rounded-lg'
          onClick={() => setViewOption('card')}
        >
          Card
        </button>
      </div>
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdLibraryAdd className='text-sky-800 text-4xl' />
        </Link>
      </div>
  
        {loading ? (
          <Spinner/>
        ) : viewOption === 'table' ? (
          <TableView books={books}/>
        ) : (<CardView books={books}/>)}
      </div>
  );
}

export default Home;
