import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './../context/Wrapper';
import api from './api/api';
import Register from './Register';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [monthlySpend, setmonthlySpend] = useState('')
    const [TotalSubs, setTotalSubs] = useState('')
    const [ActiveSubs, setActiveSubs] = useState('')
    const [CancelledSubs, setCancelledSubs] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                await api.get('/sub/getsub').then((res) => {
                    setTotalSubs(res.data.allSubscriptions.length)

                })
                await api.get('/sub/totalspend').then((res) => {
                    setmonthlySpend(res.data.monthlyPrice)

                })
                await api.get("/sub/filteredsubs").then((res) => {
                    setActiveSubs(res.data.activeSubs);
                    setCancelledSubs(res.data.cancelledSubs)
                })
            } catch (error) {
                console.log("error in getting subscriptoins", error);

            }
        }
        fetchData()
    }, [])

    return (
        <div className=' bg-gray-200 h-screen overflow-y-auto lg:h-full absolute w-full lg:w-[calc(100%-256px)]'>
            <div className='lg:h-50 md:h-50 h-75 w-full flex justify-around items-center  p-8 flex-col sm:flex-col lg:flex-row md:flex-row gap-3 lg:gap-0'>
                <div className='bg-white shadow-2xl p-4 h-30 w-60 rounded-xl flex flex-col justify-center'>
                    <h2 className='text-lg font-bold'>Total Monthly Spend</h2>
                    <h1 className='text-2xl'>₹{monthlySpend}</h1>
                </div>
                <div className='bg-white h-30 shadow-2xl p-4 w-60 rounded-xl flex flex-col justify-center'>
                    <h2 className='text-lg font-bold'>Active Subscription</h2>
                    <h1 className='text-2xl'>{ActiveSubs.length}</h1>
                </div>
                <div className='bg-white h-30 w-60 shadow-2xl p-4 rounded-xl flex flex-col justify-center'>
                    <h2 className='text-lg font-bold'>Cancelled Subscription</h2>
                    <h1 className='text-2xl'>{CancelledSubs.length}</h1>
                </div>
            </div>
            <div className='p-10 relative h-90 w-full'>
                <div className='bg-white h-110 w-full rounded-2xl shadow-2xl'>

                </div>

            </div>
        </div>

    )
}

export default Dashboard