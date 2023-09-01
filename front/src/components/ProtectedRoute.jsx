import { useAuth } from "../context/AuthContext"
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {

    const {isAuthenticated, loading} = useAuth()
    if(loading) return <h1>CARGANDO...</h1>

    if(!loading && !isAuthenticated){
        return <Navigate to='/login' replace />
    }

    return (
        <Outlet/>
    )
}

export default ProtectedRoute