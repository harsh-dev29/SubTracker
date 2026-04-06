import axios from "axios";

const api = axios.create({
    baseURL: "https://subtracker-1-suwy.onrender.com/api",
    withCredentials: true
});

export default api;