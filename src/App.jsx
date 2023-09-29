import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Members from './components/Members/Members'
import Assignment from './components/PrimaryAssignment/Assignment'


const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/members' element={<Members />} />
            <Route path='/assignment' element={<Assignment />} />
        </Routes>
    </Router>
  )
}

export default App