// Format to import files:
// import [File Name] from 'relative path'import logo from "./logo.svg";
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from './components/Login';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
