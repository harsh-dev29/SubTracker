import React from 'react'
import Nav from './pages/Nav'
import Login from './pages/Login'
import { AuthContext } from './context/Wrapper'
import { useContext } from 'react'
import api from './pages/api/api'
import AllRoutes from './pages/AllRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { user, loading } = useContext(AuthContext)
    return (
        <div className='flex flex-row' >
            {user ? <Nav /> : ""}
            <AllRoutes />
            <ToastContainer position='bottom-right' autoClose={3000} style={{ zIndex: 99999 }} />
        </div>
    )
}

export default App