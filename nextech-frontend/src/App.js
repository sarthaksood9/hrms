import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Silder from './components/Silder';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AdminRouter from './Routes/AdminRouter';
import { useState } from 'react';
import EmployeeRoutes from './Routes/EmployeeRoutes';
import Registration from './components/Registration';

function App() {

  const [user, setUset] = useState("admin")
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {user ? <Route path='/*' element={user === "admin" ? <AdminRouter /> : <EmployeeRoutes />}  />: <Route path='/' element={<Registration/>}/>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
