import React, { useContext, useEffect } from 'react'
import { RiBarChartFill, RiHome4Line, RiMenu4Line, RiMenuLine, RiSettings3Line } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import api from './api/api';
import { AuthContext } from '../context/Wrapper';


const Nav = () => {
    const navigate = useNavigate()
    const { verifyUser } = useContext(AuthContext)
    const logout = async () => {
        await api.get('/auth/logout').then((res) => {
            console.log(res);
            navigate('/login')
        })
        verifyUser()
    }
    const showNavRoutes = ['/', '/dashboard',];

    // If the current path isn't in our list, it's likely a 404 or a hidden page
    if (!showNavRoutes.includes(location.pathname)) {
        return null;
    }

    return (
        <div className='absolute z-10 lg:relative md:absolute md:right-0  lg:block right-0 bg-gray-700 h-screen text-white w-64 p-4 '>
            <h1 className='text-4xl'>SubTracker</h1>
            < RiMenuLine />
            <div className='flex flex-col gap-8 text-xl mt-12'>
                <h1 className='flex gap-2 cursor-pointer' onClick={() => {
                    navigate("/dashboard")
                }}><RiHome4Line />Dashboard</h1>
                <h1 onClick={() => {
                    navigate("/addsubscription")
                }} className='flex gap-2 cursor-pointer'><span className='text-2xl'>+</span> Add Subscription</h1>
                <h1 className='flex gap-2 cursor-pointer'><RiBarChartFill />Analytics</h1>
                <h1 className='flex gap-2 cursor-pointer'><RiSettings3Line />Settings</h1>
            </div>
            <div className='flex gap-4   absolute bottom-0 p-4 border-t-2 border-gray-400 items-center'>
                {/* <img className='rounded-full' src="" alt="dummy" /> */}
                <h1>John Doe</h1>
                <button onClick={logout} className='bg-gray-500 rounded-full p-2 cursor'>Logout</button>
            </div>
        </div>
    )
}

export default Nav