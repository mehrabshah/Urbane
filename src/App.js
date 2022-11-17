import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import LoginAdmin from './components/Login/LoginAdmin';
import Upload from './components/Admin/Upload';
import Verification from './components/Admin/Verification';
import Retrieve from './components/Admin/Retrieve';
function App() {
  return (
    <div>
        
        {/* <Home></Home>
         <Upload></Upload>
          <Verification/>  
          */}
        {/* <LoginAdmin/>*/}
        


        <Retrieve/>
        <Upload/>
        <Verification/>


        
    
    </div>
  );
}

export default App;
