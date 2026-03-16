import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import { AuthContext } from '../context/Wrapper'
import NotLogin from './NotLogin'
import AddSubscription from './AddSubscription'
import Analytics from './Analytics'
import Setting from './Setting'

const AllRoutes = ({ isActive, setisActive }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!user) {
        navigate('/login')
    }
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/addSubscription' element={<AddSubscription isActive={isActive} setisActive={setisActive} />} />
                <Route path='/analytics' element={<Analytics isActive={isActive} setisActive={setisActive} />} />
                <Route path='/setting' element={<Setting user={user} />} />
                <Route path="*" element={<NotFound />} />
                {user ? <><Route path='/dashboard' element={<Dashboard isActive={isActive} setisActive={setisActive} />} /></> : ""}
            </Routes>
        </div>
    )
}

export default AllRoutes