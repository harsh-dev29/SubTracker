import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Chart = ({ data }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
    return (
        <div className="bg-white p-12 rounded-xl shadow-2xl shadow-gray-300 h-80 w-full 
        ">
            <h3 className="text-lg font-bold mb-4">Spending by Category</h3>
            <ResponsiveContainer width="100%" height="100%" minWidth="0">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60} // Makes it a Donut Chart
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart