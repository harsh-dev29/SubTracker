import React, { useContext } from 'react'
import { AuthContext } from '../context/Wrapper'

const Setting = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <div className='bg-gray-200  h-full text-xl w-sceen lg:w-[calc(100vw-256px)] flex items-center justify-center'>

            <div className='bg-red-500 rounded-xl h-60 w-[50%]  flex items-center p-6'>
                <div className='w-[40%] border-r-2 flex h-full items-center justify-center'>
                    <div className='h-50 w-50 rounded-full bg-gray-400 flex items-center justify-center text-4xl'><h1>{user?.fullname.firstName.charAt(0)}{user?.fullname.lastName.charAt(0)}</h1></div>
                </div>
                <div className=' w-[60%]'>
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
                            <h1>total subscriptions: 9</h1>
                        </div>
                        <button className='bg-blue-400 hover:bg-blue-500 p-5 hover:scale-105 duration-300 rounded-xl '>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Setting