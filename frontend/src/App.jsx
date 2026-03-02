import React from 'react'
import Nav from './pages/Nav'
import Login from './pages/Login'
import { AuthContext } from './context/Wrapper'
import { useContext } from 'react'
import api from './pages/api/api'
import AllRoutes from './pages/AllRoutes'

const App = () => {
    const { user, loading } = useContext(AuthContext)
    return (
        <div className='flex flex-row' >
            {user ? <Nav /> : ""}
            <AllRoutes />
        </div>
    )
}

export default App