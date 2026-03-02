import React, { useContext, useEffect, useRef, useState } from 'react'
import { RiBarChartFill, RiHome4Line, RiMenu4Line, RiMenuLine, RiSettings3Line } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import api from './api/api';
import { AuthContext } from '../context/Wrapper';
import { toast } from 'react-toastify';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { easeInOut, easeOut } from 'motion/react';


const Nav = () => {
    const [isActive, setisActive] = useState(false)
    const navref = useRef()
    const menuref1 = useRef()
    const menuref2 = useRef()
    const menulist = useRef()
    const menulist1 = useRef()
    const menulist2 = useRef()
    const menulist3 = useRef()

    gsap.registerPlugin(useGSAP)
    const navigate = useNavigate()
    const logouttoast = () => toast.success("user logged out successfully")
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

    useGSAP(() => {
        if (isActive == false) {
            gsap.to(navref.current, {
                x: 0,
                duration: 1,
                transition: easeOut
            })
            gsap.to(menuref1.current, {
                opacity: 1,
                duration: .8
            })
            gsap.to(menuref2.current, {
                opacity: 1,
                duration: .8
            })
        } else {
            gsap.to(navref.current, {
                x: 200,
                duration: 1,
                transition: easeOut
            })
            gsap.to(menuref1.current, {
                opacity: 0,
                duration: .8
            })
            gsap.to(menuref2.current, {
                opacity: 0,
                duration: .8
            })
        }
    }, [isActive])
    useGSAP(() => {
        if (isActive) {
            gsap.to(menulist.current, {
                opacity: 0,
                duration: .8
            })
            gsap.to(menulist1.current, {
                opacity: 0,
                duration: .8
            })
            gsap.to(menulist2.current, {
                opacity: 0,
                duration: .8
            })
            gsap.to(menulist3.current, {
                opacity: 0,
                duration: .8
            })
        } else {
            gsap.to(menulist.current, {
                opacity: 1,
                duration: .8
            })
            gsap.to(menulist1.current, {
                opacity: 1,
                duration: .8
            })
            gsap.to(menulist2.current, {
                opacity: 1,
                duration: .8
            })
            gsap.to(menulist3.current, {
                opacity: 1,
                duration: .8
            })
        }
    }, [isActive])


    return (
        <div ref={navref} className='mobile-nav absolute z-10 lg:relative md:absolute md:right-0  lg:block right-0 bg-gray-700 h-screen text-white w-65 lg:w-64 p-4 '>
            <div className='flex flex-row-reverse lg:block items-center gap-1 '>
                <h1 ref={menuref2} className='text-4xl'>SubTracker</h1>
                <div className='block p-2 lg:hidden sm:block bg-gray-600 rounded-lg'>< RiMenuLine onClick={() => {
                    setisActive(!isActive)
                }} /></div>
            </div>
            <div className='flex flex-col gap-8 text-xl mt-12'>
                <h1 className='flex gap-2 cursor-pointer' onClick={() => {
                    navigate("/dashboard")
                }}><RiHome4Line /><h2 ref={menulist}>Dashboard</h2></h1>
                <h1 onClick={() => {
                    navigate("/addsubscription")
                }} className='flex gap-2 cursor-pointer'><span className='text-2xl'>+</span><h2 ref={menulist1}> Add Subscription</h2></h1>
                <h1 className='flex gap-2 cursor-pointer'><RiBarChartFill /><h2 ref={menulist2}>Analytics</h2></h1>
                <h1 className='flex gap-2 cursor-pointer'><RiSettings3Line /><h2 ref={menulist3}>Settings</h2></h1>
            </div>
            <div ref={menuref1} className='flex gap-4   absolute bottom-0 p-4 border-t-2 border-gray-400 items-center'>
                {/* <img className='rounded-full' src="" alt="dummy" /> */}
                <h1>John Doe</h1>
                <button onClick={() => {
                    logout()
                    logouttoast()
                }} className='bg-gray-500 rounded-full p-2 cursor'>Logout</button>
            </div>
        </div>
    )
}

export default Nav