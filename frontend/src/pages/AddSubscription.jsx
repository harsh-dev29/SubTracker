import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import api from "./api/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddSubscription = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        planType: "monthly",
        startDate: new Date().toISOString().split("T")[0], // Defaults to today
    });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const submitHanddler = async (e) => {
        try {
            // Send data to your backend
            const res = await api.post("http://localhost:3000/api/sub/addsub", e, {
                withCredentials: true,
            }).then((res) => {
                toast.success("Subscription Added!");
                navigate('/dashboard')
                setFormData({ name: "", price: "", planType: "monthly", startDate: new Date().toISOString().split("T")[0] });
            });


        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to add subscription");
        }

    };

    return (
        <div className="relative p-6 w-[calc(100vw-256px)] h-full bg-gray-300  border flex items-center justify-center">
            <form onSubmit={handleSubmit(submitHanddler)} className="space-y-4  bg-white  p-4 rounded-2xl shadow-white shadow-2xl  ">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Add New Subscription</h2>

                {/* Sub Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-700">Service Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. Netflix, Spotify"
                        {...register('name')}
                        className="w-full p-2 border-b-2 rounded-md focus:ring-1 outline-none shadow-lg"
                        required
                    />
                </div>

                {/* Price & Plan Type */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700">Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            {...register("price")}
                            placeholder="₹799"
                            className="w-full p-2 border-b-2 rounded-md  shadow-lg"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700">Plan</label>
                        <select
                            name="planType"
                            {...register('plantype')}
                            className="w-full p-2 border-b-2 rounded-md outline-none shadow-lg"
                        >
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                </div>
                {/* category */}
                <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700">Category</label>
                    <select
                        name="category"
                        {...register('category')}
                        className="w-full p-2 border-b-2 rounded-md outline-none shadow-lg"
                    >
                        <option value="Entertainment">Entertainment</option>
                        <option value="Software">Software</option>
                        <option value="Health">Health</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Start Date */}
                <div>
                    <label className="block text-sm font-bold text-gray-700">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        {...register('startDate')}
                        className="w-full p-2 border-b-2 rounded-md outline-none shadow-lg"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg hover:scale-102 duration-300 "
                >
                    Add Subscription
                </button>
            </form>
        </div>
    );
};

export default AddSubscription;