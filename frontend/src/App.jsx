import React, { useState } from 'react'
import Nav from './pages/Nav'
import { AuthContext } from './context/Wrapper'
import { useContext } from 'react'
import AllRoutes from './pages/AllRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { user, loading } = useContext(AuthContext)
    const [isActive, setisActive] = useState(false)

    return (
        <div className='flex flex-row overflow-hidden' >
            {user ? <Nav user={user} isActive={isActive} setisActive={setisActive} /> : ""}
            <AllRoutes isActive={isActive} setisActive={setisActive} />
            <ToastContainer position='bottom-right' autoClose={3000} style={{ zIndex: 99999 }} />
        </div>
    )
}

export default App