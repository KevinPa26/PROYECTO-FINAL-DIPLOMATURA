import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import {Link, useNavigate} from "react-router-dom"
import Navbar from "../components/navbar"

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {singup, isAuthenticated, errors: authErrors} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuthenticated) navigate('/')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        await singup(values)
    })

  return (
    <div className="flex flex-col">
        <Navbar/>
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md p-5 rounded-md text-white">
                <h2 className="text-2xl font-bold mb-2">Registro</h2>
                {authErrors?.message && <p className="text-red-500">{authErrors.message}</p>}
                <form onSubmit={onSubmit}>
                    <input type="text" {...register('username', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="username"/>
                    {errors.username && <p className="text-red-500">Username es requerido</p>}
                    <input type="email" {...register('email', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="email"/>
                    {errors.email && <p className="text-red-500">Email es requerido</p>}
                    <input type="password" {...register('password', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="password"/>
                    {errors.password && <p className="text-red-500">Password es requerido</p>}
                    <div className="flex items-center justify-end mt-2">
                        <p>Tengo cuenta. Click <Link to='/login' className="text-bold text-blue-500 mr-2">Aquí</Link></p>
                        <div className="flex justify-end mt-2">
                            <button className="py-2 px-4 bg-green-500 rounded-lg" type="submit">
                                Registrase
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage