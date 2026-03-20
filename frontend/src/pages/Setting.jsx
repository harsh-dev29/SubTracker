import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Wrapper'
import api from './api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { RiMenuUnfoldLine } from '@remixicon/react';

const Setting = ({ isActive, setisActive }) => {
    const { user } = useContext(AuthContext)
    const [TotalSubs, setTotalSubs] = useState([])
    const navigate = useNavigate()
    const logout = () => {
        api.get('/auth/logout').then((res) => {
            toast.success("user Logged Out Successfylly")
            navigate('/login')
        })
    }

    const allSubs = () => {
        api.get('/sub/getsub').then((res) => {
            setTotalSubs(res.data?.allSubscriptions.length)
        })
    }
    console.log(TotalSubs);

    useEffect(() => {
        allSubs()
    }, [])
    return (
        <div className='bg-gray-300  h-full text-xl w-sceen lg:w-[calc(100vw-256px)] flex flex-col lg:flex-row lg:items-center justify-center '>
            <div className='flex items-center lg:hidden gap-1 p-5'>
                <div className='block p-2 lg:hidden sm:block bg-gray-400 shadow-white shadow-2xl rounded-lg'>< RiMenuUnfoldLine onClick={() => {
                    setisActive(!isActive)
                }} />
                </div>
                <h1 className='text-4xl'>SubTracker</h1>
            </div>
            <div className='bg-white lg:rounded-xl lg:h-70 lg:w-[55%] w-full flex flex-col lg:flex-row items-center p-6'>

                <div className='lg:w-[40%] w-full border-b-0 lg:border-r-2 p-2 flex h-full items-center justify-center'>
                    <div className='h-50 w-50 rounded-full bg-gray-500 flex items-center justify-center text-4xl'><h1>{user?.fullname.firstName.charAt(0)}{user?.fullname.lastName.charAt(0)}</h1></div>
                </div>
                <div className=' w-[60%] flex flex-col gap-7'>
                    <div className='p-2 flex w-full h-full flex-col  items-center justify-center   '>
                        <div className='flex gap-10 '>
                            <h1>firtname: {user?.fullname.firstName}</h1>
                            <h1>lastname: {user?.fullname.lastName}</h1>
                        </div>
                        <div>
                            <h1>Email : {user?.email}</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <div className='bg-gray-500 rounded-xl p-5'>
                            <h1>total subscriptions: {TotalSubs}</h1>
                        </div>
                        <button onClick={logout} className='bg-blue-400 hover:bg-blue-500 p-5 hover:scale-105 duration-300 rounded-xl '>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Setting