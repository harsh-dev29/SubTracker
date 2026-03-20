import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Api from '../pages/api/Api';

export const AuthContext = createContext()

const Wrapper = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const verifyUser = async () => {
        await Api.get("/auth/user",)
            .then(res => setUser(res.data.user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        // Check with the backend as soon as the page loads
        verifyUser()
    }, []);
    return <AuthContext.Provider value={{ user, loading, verifyUser }}>{children}</AuthContext.Provider>

}

export default Wrapper