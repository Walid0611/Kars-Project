import React from 'react';
import Register from './component/register/Register';
import Login from './component/login/Login';
import Navbar from './component/navbar/Navbar';
import Privateroute from './component/PrivateRoute/PrivateRoute';
import Home from './component/Home/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
    <h1>Great Deal</h1>
    
      <Routes>
      
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/app/PrivateRoute" element={<Privateroute />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
