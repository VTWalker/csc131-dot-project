// Format to import files:
// import [File Name] from 'relative path'import logo from "./logo.svg";
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
