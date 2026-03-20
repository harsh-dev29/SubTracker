import React, { useContext, useEffect, useRef, useState } from 'react'
import { RiBarChartFill, RiHome4Line, RiMenuFoldLine, RiMenuLine, RiSettings3Line } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import api from './api/Api';
import { AuthContext } from '../context/Wrapper';
import { toast } from 'react-toastify';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { easeInOut, easeOut } from 'motion/react';


const Nav = ({ user, isActive, setisActive }) => {
    const navigate = useNavigate()
    const navref = useRef()
    const menuref1 = useRef()
    const menuref2 = useRef()
    const menuref3 = useRef()
    const menulist = useRef()
    const menulist1 = useRef()
    const menulist2 = useRef()
    const menulist3 = useRef()
    gsap.registerPlugin(useGSAP)

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
            gsap.to(menuref3.current, {
                opacity: 1,
                duration: .8
            })
        } else {
            gsap.to(navref.current, {
                x: "-100%",
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
            gsap.to(menuref3.current, {
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

    const showNavRoutes = ['/', '/dashboard', '/addsubscription', '/analytics', '/setting'];

    // If the current path isn't in our list, it's likely a 404 or a hidden page
    if (!showNavRoutes.includes(location.pathname)) {
        return null;
    }

    const logout = () => {
        api.get('/auth/logout').then((res) => {
            navigate('/login')
            toast.success("user logged out successfully")
            console.log(res);
        })
    }
    return (
        <div ref={navref} className='mobile-nav absolute z-10 lg:relative md:absolute lg:block  bg-gray-700 h-screen text-white w-65 lg:w-64 '>

            <div className='flex flex-row- lg:block items-center gap-1 p-4'>
                <h1 ref={menuref3} className='text-4xl'>SubTracker</h1>
                <div className='block p-2 lg:hidden sm:block bg-gray-600 rounded-lg'>< RiMenuFoldLine onClick={() => {
                    setisActive(!isActive)
                }} /></div>
            </div>
            <div className='flex flex-col gap-8 text-xl mt-12 p-4'>
                <h1 className='flex gap-2 cursor-pointer' onClick={() => {
                    navigate("/")
                }}><RiHome4Line /><span ref={menulist}>Dashboard</span></h1>
                <h1 onClick={() => {
                    navigate("/addsubscription")
                }} className='flex gap-2 cursor-pointer'><span className='text-2xl p-1'>+</span><span ref={menulist1}>Add Subscription</span></h1>
                <h1 onClick={() => {
                    navigate('/analytics')
                }} className='flex gap-2 cursor-pointer'><RiBarChartFill /><span ref={menulist2}>Analytics</span></h1>
                <h1
                    onClick={() => {
                        navigate('/setting')
                    }} className='flex gap-2 cursor-pointer'><RiSettings3Line /><span ref={menulist3}>Settings</span></h1>
            </div>
            <div className='flex gap-6 absolute bottom-2 p-2  border-t-2 border-gray-400 items-center'>
                <div className='h-10 w-13 rounded-full bg-gray-400 flex items-center justify-center'><h1>{user.fullname.firstName.charAt(0)}{user.fullname.lastName.charAt(0)}</h1></div>
                {/* <img className='rounded-full' src="" alt="dummy" /> */}
                <h1 ref={menuref1}>{user.fullname.firstName} {user.fullname.lastName}</h1>
                <button ref={menuref2} onClick={() => {
                    logout()
                }} className='bg-gray-500 rounded-full p-2 cursor'>Logout</button>
            </div>
        </div>
    )
}

export default Nav