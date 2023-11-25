import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarCustom from './components/Header/Header';
import AdminDashboard from './pages/AdminDashboard';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <>
      <NavbarCustom />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/books/create' element={<CreateBook />} />
        <Route path='/admin/books/details/:id' element={<ShowBook />} />
        <Route path='/admin/books/edit/:id' element={<EditBook />} />
        <Route path='/admin/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </>
  );
};

export default App;