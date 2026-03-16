import React, { useEffect, useState } from 'react'
import SubCard from './SubCard'
import api from './api/api'

const SubComponent = () => {
    const [subs, setsubs] = useState([])

    const fetchingSubs = async () => {
        try {
            const res = await api.get('/sub/getsub')
            if (res.status === 200) {
                setsubs(res.data.allSubscriptions)
            }
        } catch (error) {
            console.log("error while fetching subs", error);
        }
    }

    useEffect(() => {
        fetchingSubs()
    })

    return (
        <div className='bg-white h-110 w-full rounded-2xl flex flex-col p-3 gap-2 shadow-2xl shadow-gray-300'>
            <div className='flex justify-between p-2'><h1>No</h1>
                <h1>Name</h1>
                <h1>Next renewal</h1>
                <h1>delete</h1></div>
            {subs.map((sub, index) => <SubCard fetchingSubs={fetchingSubs} index={index + 1} sub={sub} />)}
        </div>
    )
}

export default SubComponent