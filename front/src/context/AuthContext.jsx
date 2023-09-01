import { createContext, useState, useContext, useEffect } from "react";
import { reguisteRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth"
import Cookie from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth');
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    const singup = async (usuario) => {
        try {
            const res = await reguisteRequest(usuario)
            setUsuario(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const singin = async (usuario) => {
        try {
            const res = await loginRequest(usuario)
            setUsuario(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const logout = async () => {
        try {
            await logoutRequest()
            setUsuario(null)
            setIsAuthenticated(false)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    //useEffect clear errors

    useEffect(() => {
        const check = async () => {
            const cookies = Cookie.get()
            if(!cookies.token){
                setIsAuthenticated(false)
                setUsuario(null)
                setLoading(false)
                return
            }
            
            try {
                const res = await verifyTokenRequest()
                if(!res.data){
                    setIsAuthenticated(false)
                    setLoading(false)
                    setUsuario(null)
                    return
                }
                isAuthenticated(true)
                setUsuario(res.data)
                setLoading(false)

            } catch (error) {
                setIsAuthenticated(false)
                setUsuario(null)
                setLoading(false)
            }
        }
        check()
    }, [])

    return(
        <AuthContext.Provider value={{
            singup,
            singin,
            loading,
            logout,
            usuario,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}