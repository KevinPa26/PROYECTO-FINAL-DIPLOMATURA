import { useForm } from "react-hook-form"
import Navbar from "../components/navbar"
import { useAuth } from "../context/AuthContext"
import { useNovedades } from "../context/NovedadesContext"
import { useNavigate } from "react-router-dom"

export const NovedadUpdatePage = () => {

    const {register, handleSubmit, formState: {errors} } = useForm()
    const {novedad, updatedNovedad} = useNovedades()
    const {usuario} = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        values.usuarioid = usuario.id
        await updatedNovedad(novedad.id, values)
        navigate('/novedades')
    })

    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                <div className="bg-zinc-800 max-w-md p-5 rounded-md text-white">
                <h1 className="text-2xl text-bold">Editar</h1>
                    <form onSubmit={onSubmit}>
                        <input type="number" hidden {...register('usuarioid', { disabled: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="usuarioid"/>
                        <input type="text" {...register('titulo', { required: true, value: novedad.titulo})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="titulo"/>
                        {errors.titulo && <p className="text-red-500">Password es requerido</p>}
                        <textarea {...register('descripcion', { required: true, value: novedad.descripcion})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="descripción"/>
                        {errors.descripcion && <p className="text-red-500">Password es requerido</p>}
                        <div className="flex items-center justify-end mt-2">
                            <button className="py-2 px-4 bg-green-500 rounded-lg" type="submit">
                                Editar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
