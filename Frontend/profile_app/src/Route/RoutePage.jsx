import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Profile from '../Components/Profile'
import Register from '../Components/Register'


import PrivateRoute from './PrivateRoute'

const RoutePage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element ={
                <PrivateRoute>
                    <Profile/>
                </PrivateRoute>
            } />

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default RoutePage