import React from 'react'
import { createContext } from 'react'
import api from '../pages/api/api';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const Wrapper = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const verifyUser = async () => {
        api.get("/auth/user", { withCredentials: true })
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