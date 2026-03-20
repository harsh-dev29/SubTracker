import React, { useEffect, useState } from 'react'
import Chart from './Chart';
import ChartBar from './ChartBar';
import SubCard from './SubCard';
import SubComponent from './SubComponent';
import { RiMenuUnfoldLine } from '@remixicon/react';
import api from '../api/api';

const Analytics = ({ isActive, setisActive }) => {
    const [subs, setSubs] = useState([])

    const fetch = async () => {
        try {
            const res = await api.get('/sub/getsub')
            if (res.status === 200) {
                setSubs(res.data.allSubscriptions)
            } else {
                return
            }

        } catch (error) {
            console.log('error fetching data', error);

        }
    }
    const chartData = subs.reduce((acc, sub) => {
        const existing = acc.find(item => item.name === sub.category);
        if (existing) {
            existing.value += sub.price;
        } else {
            acc.push({ name: sub.category || 'Other', value: sub.price });
        }
        return acc;
    }, []);
    const processCategoryData = (subs) => {
        const totals = subs.reduce((acc, sub) => {
            // 1. Identify the category (default to 'Other' if empty)
            const cat = sub.category || 'Other';

            // 2. Add the price to that category's total
            acc[cat] = (acc[cat] || 0) + Number(sub.price);

            return acc;
        }, {});
        // 3. Transform the object into the Array format Recharts needs
        // From { Streaming: 50 } to [{ name: 'Streaming', value: 50 }]
        return Object.keys(totals).map(key => ({
            name: key,
            value: totals[key]
        }));
    };
    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className='bg-gray-200 h-screen lg:h-screen w-screen overflow-auto lg:w-[calc(100vw-256px)] pb-4'>
            <div className='flex items-center lg:hidden gap-1 p-5'>
                <div className='block p-2 lg:hidden sm:block bg-gray-400 shadow-white shadow-2xl rounded-lg'>< RiMenuUnfoldLine onClick={() => {
                    setisActive(!isActive)
                }} />
                </div>
                <h1 className='text-4xl'>SubTracker</h1>
            </div>
            <div className='w-full overflow-auto flex flex-col items-center justify-center'>

                <div className="p-8 space-y-8 ">
                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                        <Chart data={processCategoryData(subs)} />
                        <ChartBar subs={subs} />
                    </div>
                </div>
                <div className='w-[80%] '>

                    <SubComponent TotalSubs={subs} fetchData={fetch} />
                </div>
            </div>
        </div>
    )
}

export default Analytics