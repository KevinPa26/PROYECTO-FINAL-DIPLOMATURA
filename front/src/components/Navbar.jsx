import { useAuth } from "../context/AuthContext"
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {

    const {isAuthenticated, usuario, logout} = useAuth()
    const navigate = useNavigate()

    const handleClick = async () => {
        await logout()
        navigate('/')
    }

    return (
        <nav className="flex flex-row h-[40px] w-full items-center justify-between bg-zinc-800 text-white text-bold">
            <div className="flex gap-x-2 ml-2">
                <p><Link to='/' className="">INICIO</Link></p>
                <p><Link to='/novedades' className="">NOVEDADES</Link></p>
                <p><Link to='/nosotros' className="">NOSOTROS</Link></p>
                <p><Link to='/contacto' className="">CONTACTO</Link></p>
            </div>
            <div className="flex flex-row gap-x-4 mr-2">
                {!isAuthenticated && <p><Link to='/login' className="">LOGIN</Link></p>}
                {isAuthenticated && <p>Bienvenido {usuario.username}</p>}
                {isAuthenticated && <button onClick={handleClick}>LOGOUT</button>}
            </div>
        </nav>
    )
}

export default Navbar