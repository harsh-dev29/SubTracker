import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { easeInOut, motion } from 'motion/react'
import './css/login.css'
import netfliximg from '../assets/png/netflix.png'
import snapchatimg from '../assets/png/snapchat.png'
import primevideoimg from '../assets/png/primevideo.png'
import chatgptimg from '../assets/png/chatgpt.png'
import youtubeimg from '../assets/png/youtube.png'
import applemusicpng from '../assets/png/applemusic.png'
import { AuthContext } from '../context/Wrapper'
import Api from './api/Api'

const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const { verifyUser } = useContext(AuthContext)

    const submitHanddler = async (data) => {

        try {
            const response = await Api.post('/auth/login', {
                email: data.email,
                password: data.password
            }).then((res) => {
                navigate('/')
                verifyUser()
                toast.success("user login sucessfully")
                console.log(res.data.user);

            })

        } catch (error) {
            toast.error("invalid username and password")
        }
    }
    return (
        <div className='w-screen h-screen bg-gray-300 lg:p-5 flex flex-row'>
            <div className=' flex-row  w-1/2 items-center justify-center hidden lg:flex'>
                <div className="quote-div  justify-center flex  items-center w-1/2 text-5xl lg:ml-5 m-5 ">
                    <h5 className='w-full'>All your <span className='lg:text-6xl text-blue-600'>Subs,</span> <br />one dashboard.</h5>
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{
                        duration: 2,
                        ease: easeInOut,
                        repeat: Infinity,
                    }}
                        className='absolute h-20 left-20 shadow-2xl rounded-2xl rounded-ee-2xl shadow-gray-900' src={netfliximg} alt="" />
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{
                        duration: 2,
                        ease: easeInOut,
                        delay: .1,
                        repeat: Infinity,
                    }} className='absolute h-20 left-45 top-24 rounded-3xl shadow-2xl shadow-gray-900' src={youtubeimg} alt="" />
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{
                        duration: 2,
                        ease: easeInOut,
                        delay: .3,
                        repeat: Infinity,
                    }} className='absolute h-20 left-100 top-22 rounded-full shadow-2xl shadow-gray-900' src={chatgptimg} alt="" />
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{
                        duration: 2,
                        ease: easeInOut,
                        repeat: Infinity,
                    }} className='absolute h-20 left-140 top-50 rounded-full shadow-2xl shadow-gray-900' src={applemusicpng} alt="" />
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{
                        duration: 2,
                        ease: easeInOut,
                        delay: .7,
                        repeat: Infinity,
                    }} className='absolute h-20 left-120 bottom-50 rounded-3xl shadow-2xl shadow-gray-900' src={primevideoimg} alt="" />
                    <motion.img animate={{ y: [0, 25, 0] }} transition={{
                        duration: 2,
                        ease: easeInOut,
                        delay: .5,
                        repeat: Infinity,
                    }} className='absolute h-20 left-70 bottom-40 shadow-2xl rounded-2xl shadow-gray-900' src={snapchatimg} alt="" />
                </div>
            </div>
            <div className="form-div w-full lg:w-1/2 flex items-center justify-center mb-25 lg:mb-0 flex-col lg:top-20 lg:right-0 ">
                <div className="  text-div w-full lg:w-[70%] mb-10 lg:mb-0 items-center justify-center flex lg:flex-col flex-col-reverse lg:border-b-3 p-4 border-gray-400 text-3xl lg:text-5xl lg:p-2 ">
                    <div className='flex lg:hidden border-b-2 border-gray-500 w-[80%]'>
                        <h5 className='w-full '>All your <span className='lg:text-6xl text-blue-600'>Subs,</span> <br />one dashboard.</h5>
                    </div>
                    <h1 className=' lg:font-normal pb-5 lg:pb-0' > Hey,Welcome back
                    </h1>
                </div>
                <form onSubmit={handleSubmit(submitHanddler)} className='flex gap-10 w-[80%] flex-col lg:text-lg lg:p-10' action="">
                    <div>
                        <h1 className='text-xl'> email</h1>
                        <input {...register('email')} type="email" className='rounded-xl lg:p-3 text-xl
           focus:outline-none focus:ring-2 mt-1.5 bg-white focus:ring-indigo-500  w-full p-2
           focus:border-indigo-500 transition' placeholder='example@gmail.com' />
                    </div>
                    <div>
                        <h1 className='text-xl'>password</h1>
                        <input type="password" {...register('password')} className='rounded-xl text-2xl w-full
           focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white mt-1.5  p-2
           focus:border-indigo-500 transition  ' placeholder='********' />
                        <p className='text-sm font-black mt-2'>Don't have an account?<a className='text-blue-700' href="/register"> Register</a></p>
                    </div>
                    <button className='rounded-lg hover:scale-110 p-3 hover:bg-blue-700 transition duration-500 border-b-black bg-blue-500 w-full  text-lg'>sign-in</button>
                </form>
            </div>
        </div>
    )
}

export default Login