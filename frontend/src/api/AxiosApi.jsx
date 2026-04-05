import axios from "axios";

const api = axios.create({
    baseURL: "https://subtracker-eiut.onrender.com",
    withCredentials: true
});

export default api;