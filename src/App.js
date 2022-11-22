import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import LoginAdmin from './components/Login/LoginAdmin';
import LoginUser from './components/Login/LoginUser';
import Verify from './components/Admin/Verify';
import Upload from './components/Admin/Upload';
import Retrieve from './components/Admin/Retrieve';


function App() {
  return (
    <div>
         <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="loginAdmin" element={<LoginAdmin/>}></Route>
                <Route path="loginUser" element={<LoginUser/>}></Route>
                <Route path="verify" element={<Verify/>}></Route>
                <Route path="upload" element={<Upload/>}></Route>
                <Route path="retrieve" element={<Retrieve></Retrieve>}></Route>
              </Routes>
         </BrowserRouter>
         
    </div>
  );
}

export default App;
