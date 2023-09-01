import { useForm } from "react-hook-form"
import Navbar from "../components/navbar"
import { crearConsulta } from "../api/consultas"
import Swal from 'sweetalert2'

const ContactoPage = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const res = await crearConsulta(values)
        if(res.status == 200){
            Swal.fire('Tu consulta fue enviada!')
            reset()
        }
    })

    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                <div className="bg-zinc-800 max-w-md p-5 rounded-md text-white">
                    <h2 className="text-2xl font-bold mb-2">ENVÍA TU CONSULTA!</h2>
                    {/* {authErrors?.message && <p className="text-red-500">{authErrors.message}</p>} */}
                    <form onSubmit={onSubmit}>
                        <input type="text" {...register('nombre', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="nombre"/>
                        {errors.nombre && <p className="text-red-500">nombre es requerido</p>}
                        <input type="text" {...register('apellido', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="apellido"/>
                        {errors.apellido && <p className="text-red-500">apellido es requerido</p>}
                        <input type="email" {...register('email', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="email"/>
                        {errors.email && <p className="text-red-500">Email es requerido</p>}
                        <textarea {...register('consulta', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="consulta"/>
                        {errors.consulta && <p className="text-red-500">consulta es requerido</p>}
                        <div className="flex items-center justify-end mt-2">
                            <button className="py-2 px-4 bg-green-500 rounded-lg" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactoPage