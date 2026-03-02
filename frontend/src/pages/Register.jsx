import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../pages/api/api'
import { easeInOut, motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import netfliximg from '../assets/png/netflix.png'
import snapchatimg from '../assets/png/snapchat.png'
import primevideoimg from '../assets/png/primevideo.png'
import chatgptimg from '../assets/png/chatgpt.png'
import youtubeimg from '../assets/png/youtube.png'
import applemusicpng from '../assets/png/applemusic.png'


const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHanddler = async (data) => {
        console.log(data.firstName);


        try {
            const response = await api.post('/auth/register', {
                fullName: {
                    firstName: data.firstName,
                    lastName: data.lastName
                },
                email: data.email,
                password: data.password
            }).then(() => { navigate('/') })
            console.log(response);
        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='w-screen h-screen bg-gray-300 lg:p-5 flex lg:flex-row flex-col'>

            <div className="quote-div lg:flex flex-col items-center justify-center lg:text-5xl w-1/2 lg:p-5 hidden">
                <div className=' h-20 w-full overflow-hidden  mt-10'>
                    <motion.div className='flex w-max justify-start overflow-hidden'
                    >
                        <div className="div bg-linear-to-r from-gray-300 to-gray-0 w-20 h-20 relative z-1"></div>
                        <div className="div bg-linear-to-l flex from-gray-300 to-gray-0 w-20  h-20 relative z-1 left-137"></div>
                        <motion.div className='flex overflow-hidden gap-20' animate={{ x: ["-90%", "0"] }} transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: 'linear'
                        }}>
                            <div className='flex gap-20' >
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <h5 className='w-[85%] mt-15 lg:ml-20'>Stop forgetting <span className='lg:text-6xl text-blue-600'>Subscriptions,</span> <br />Start managing them.</h5>
                <div className=' h-20 w-full overflow-hidden mt-15'>
                    <motion.div className='flex w-max justify-start overflow-hidden'
                    >
                        <div className="div bg-linear-to-r from-gray-300 to-gray-0 w-20 h-20 relative z-1"></div>
                        <div className="div bg-linear-to-l flex from-gray-300 to-gray-0 w-20  h-20 relative z-1 left-137"></div>
                        <motion.div className='flex overflow-hidden gap-20' animate={{ x: ["0%", "-90%"] }} transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: 'linear'
                        }}>
                            <div className='flex gap-20' >
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                            <div className='flex  gap-20'>
                                <img src={netfliximg} className='h-20' alt="" />
                                <img src={youtubeimg} className='h-20' alt="" />
                                <img src={snapchatimg} className='h-20' alt="" />
                                <img src={primevideoimg} className='h-20' alt="" />
                                <img src={applemusicpng} className='h-20' alt="" />
                                <img src={chatgptimg} className='h-20' alt="" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="form-div h-full w-full lg:w-1/2 justify-center items-center flex flex-col ">
                <div className=" mb-6 lg:mb-0 flex flex-col-reverse items-center justify-center text-div lg:border-b-4 lg:border-gray-400 text-3xl lg:text-5xl lg:p-5 font-(family-name:quicksand) ">
                    <div className=' w-full mt-2 border-b-2 border-gray-500 lg:hidden'>
                        <h5 className=' text-2xl lg:hidden'>Stop forgetting <span className='lg:text-6xl text-blue-600'>Subscriptions,</span> <br />Start managing them.</h5>
                    </div>
                    <h1>
                        Create your account
                    </h1>
                </div>
                <form onSubmit={handleSubmit(submitHanddler)} className='flex gap-10 flex-col lg:p-10 w-[80%]' action="">
                    <div className="name-div flex w-full gap-1.5 ">
                        <div className='w-1/2'>
                            <h1 className='text-xl' >first:</h1>
                            <input {...register("firstName")} className='rounded-xl 
                                 mt-1.5 text-lg
           focus:outline-none focus:ring-2 focus:ring-indigo-500  p-2 bg-white w-full
           focus:border-indigo-500 transition' type="text" placeholder='firstname' />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-xl'>last:</h1>
                            <input {...register('lastName')} type="text" className='rounded-xl w-full text-lg bg-white p-2
           focus:outline-none focus:ring-2 focus:ring-indigo-500
           focus:border-indigo-500 transition mt-1.5' placeholder='lastname' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl'>email</h1>
                        <input {...register('email')} type="email" className='rounded-xl p-3
           focus:outline-none focus:ring-2 mt-1.5 focus:ring-indigo-500 w-full bg-white text-lg
           focus:border-indigo-500 transition' placeholder='example@gmail.com' />
                    </div>
                    <div>
                        <h1 className='text-xl' >password</h1>
                        <input type="password" {...register('password')} className='rounded-xl text-lg w-full
           focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1.5 bg-white p-2  
           focus:border-indigo-500 transition  ' placeholder='********' />
                        <p className='text-sm font-black mt-3'>Already have an account?<a className='text-blue-700' href="/login"> Login</a></p>
                    </div>
                    <button className=' w-full rounded-2xl hover:scale-110 p-3 hover:bg-blue-700 transition duration-500 border-b-black bg-blue-500 lg:w-fit text-lg'>sign-up</button>
                </form>
            </div>
        </div>
    )
}

export default Register