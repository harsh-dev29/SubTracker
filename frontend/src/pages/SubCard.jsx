import { RiDeleteBin2Line } from '@remixicon/react';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import Api from '../api/Api';
const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0'); // Ensure "01" instead of "1"
    const month = date.toLocaleString('en-US', { month: 'short' }).toLowerCase();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

const SubCard = ({ index, sub }) => {
    const deleteSub = async (id) => {
        try {
            await Api.delete(`/sub/deletesub/${id}`).then((res) => {
                console.log(res);
                toast.success("sub Deleted successfully")
            })
        } catch (error) {
            console.log("error in deleting sub", error);
        }
    }


    const color = sub.status === "Active" ? "bg-green-200" : "bg-red-100"

    return (
        <div >
            <div className={`flex flex-row h-20 w-full justify-between ${color} items-center p-3 rounded-xl`}>
                <h1>{index}</h1>
                <h1>{sub.name}</h1>
                <h1>{formatDate(sub.nextRenewal)}</h1>
                <h1 className='cursor hover:scale-110 ' onClick={() => {
                    deleteSub(sub._id)
                }}><RiDeleteBin2Line /></h1>
            </div></div>
    )
}

export default SubCard