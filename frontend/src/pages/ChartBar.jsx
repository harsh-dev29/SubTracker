import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const ChartBar = ({ subs }) => {
    const data = [...subs].sort((a, b) => b.price - a.price).slice(0, 5);

    return (
        <div className="bg-white p-12 rounded-xl shadow-2xl h-80 shadow-gray-300 ">
            <h3 className="text-lg font-bold mb-4">Top 5 Subscriptions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="price" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartBar


