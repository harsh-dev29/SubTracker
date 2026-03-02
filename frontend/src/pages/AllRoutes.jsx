import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import { AuthContext } from '../context/Wrapper'
import NotLogin from './NotLogin'

const AllRoutes = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AllRoutes