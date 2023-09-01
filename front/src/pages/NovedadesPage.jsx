import { useForm } from "react-hook-form"
import Navbar from "../components/navbar"
import { useNovedades } from "../context/NovedadesContext"
import { useAuth } from "../context/AuthContext"
import {useNavigate} from "react-router-dom"


const NovedadesPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {usuario, isAuthenticated} = useAuth()
  const {novedades, createNovedad, deleteNovedad, getNovedad} = useNovedades()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (values) => {
    values.usuarioid = usuario.id
    await createNovedad(values)
  })

  const handleDeleteNovedad = (id) => {
    const borrarNovedad = async () => {
      await deleteNovedad(id)
    }
    borrarNovedad()
  }

  const handleUpdateNovedad = (id) => {
    const moveUpdateNov = async () => {
      await getNovedad(id)
      navigate(`/novedades/update/${id}`)
    }
    moveUpdateNov()
  }

  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-3xl text-bold">MURAL DE NOVEDADES</h1>
        {novedades.map((it) => (
          <div key={it.id} className="flex flex-col items-center w-[500px] bg-zinc-800 p-5 rounded-md text-white mb-2">
            <div className="flex w-full justify-between gap-x-2 mb-2">
              <div className="bg-zinc-700 rounded-md">
                <h2 className="text-1xl text-bold p-2">{it.username}</h2>
              </div>
              {isAuthenticated && (
                <div className="flex gap-x-2">
                  <button className="py-2 px-4 bg-orange-500 rounded-lg" onClick={() => handleUpdateNovedad(it.id)}>
                    Editar
                  </button>
                  <button className="py-2 px-4 bg-red-500 rounded-lg" onClick={() => handleDeleteNovedad(it.id)}>
                    Eliminar
                  </button>
              </div>
              )}
            </div>
            <div className="flex justify-center w-full bg-zinc-700 rounded-md mb-2">
              <h2 className="text-1xl text-bold">{it.titulo}</h2>
            </div>
            <div className="flex justify-center w-full bg-zinc-700 rounded-md mb-2">
              <p className="py-2 text-bold">{it.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      {isAuthenticated && (
        <div className="flex w-full justify-center">
          <div className="bg-zinc-800 p-5 rounded-md text-white">
            <form onSubmit={onSubmit}>
              <input type="number" hidden {...register('usuarioid', { disabled: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="usuarioid"/>
              <input type="text" {...register('titulo', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="titulo"/>
              {errors.titulo && <p className="text-red-500">titulo es requerido</p>}
              <textarea {...register('descripcion', { required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="descripcion"/>
              {errors.descripcion && <p className="text-red-500">descripcion es requerido</p>}
              <div className="flex items-center justify-end mt-2">
                <div className="flex justify-end mt-2">
                  <button className="py-2 px-4 bg-green-500 rounded-lg" type="submit">
                    Subir
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default NovedadesPage