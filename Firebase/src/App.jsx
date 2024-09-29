import React from 'react'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>

    </>
  )
}

export default App