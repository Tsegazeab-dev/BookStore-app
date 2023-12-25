import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import EditPage from './pages/EditPage';
import DeletePage from './pages/DeletePage';
import Create from './pages/Create';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element= {<Create/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditPage/>} />
      <Route path='/books/delete/:id' element={<DeletePage/>} />
    </Routes>
  )
}

export default App;