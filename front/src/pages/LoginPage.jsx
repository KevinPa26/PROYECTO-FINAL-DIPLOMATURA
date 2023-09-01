import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import {Link, useNavigate} from "react-router-dom"
import Navbar from "../components/navbar"

const LoginPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {singin, isAuthenticated, errors: authErrors} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticated) navigate('/novedades')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    singin(values)
  })
  //h-[calc(100vh-100px)]
  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md p-5 rounded-md text-white">
          <h1 className="text-2xl text-bold">Login</h1>
            {authErrors?.message && <p className="text-red-500">{authErrors.message}</p>}
            <form onSubmit={onSubmit}>
                <input type="email" {...register('email', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="email"/>
                {errors.email && <p className="text-red-500">Email es requerido</p>}
                <input type="password" {...register('password', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="password"/>
                {errors.password && <p className="text-red-500">Password es requerido</p>}
                <div className="flex items-center justify-end mt-2">
                  <p>Crear una cuenta <Link to='/register' className="text-bold text-blue-500 mr-2">Aquí</Link></p>
                    <button className="py-2 px-4 bg-green-500 rounded-lg" type="submit">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage