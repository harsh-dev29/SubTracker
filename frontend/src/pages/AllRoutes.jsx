import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import { AuthContext } from '../context/Wrapper'
import NotLogin from './NotLogin'

const AllRoutes = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="*" element={<NotFound />} />
                {user ? <><Route path='/dashboard' element={<Dashboard />} /></> : ""}
            </Routes>
        </div>
    )
}

export default AllRoutes