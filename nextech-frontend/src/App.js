import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Silder from './components/Silder';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AdminRouter from './Routes/AdminRouter';
import { useContext, useState } from 'react';
import EmployeeRoutes from './Routes/EmployeeRoutes';
import Registration from './components/Registration';
import { UserContext } from './context/UserContext';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const user=useContext(UserContext);
  console.log();
  
  // console.log(user.user.post)
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {user.user ? <Route path='/*' element={user.user.post === "manager" ? <AdminRouter /> : <EmployeeRoutes />}  />: <Route path='/' element={<Registration/>}/>}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
