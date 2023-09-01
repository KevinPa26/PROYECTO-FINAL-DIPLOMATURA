import { createContext, useContext, useEffect, useState } from "react";
import {obtenerNovedades, eliminarNovedad, crearNovedad, obtenerNovedad, actualizarNovedad} from '../api/novedades'

export const NovedadesContext = createContext()

export const useNovedades = () => {
    const context = useContext(NovedadesContext)
    if(!context){
        throw new Error('No exite NovedadesContext');
    }

    return context
}

export const NovedadesProvider = ({children}) => {
    const [novedades, setNovedades] = useState([])
    const [novedad, setNovedad] = useState(null)
    const [errorsNov, setErrorsNov] = useState(null)

    const findAllNovedades = async () => {
        try {
            const res = await obtenerNovedades()
            setNovedades(res.data)
        } catch (error) {
            setErrorsNov(error.response.data)
        }
    }

    const createNovedad = async (novedad) => {
        try {
            await crearNovedad(novedad)
            await findAllNovedades()
        } catch (error) {
            setErrorsNov(error.response.data)
        }
    }

    const deleteNovedad = async (id) => {
        try {
            await eliminarNovedad(id)
            await findAllNovedades()
        } catch (error) {
            setErrorsNov(error.response.data)
        }
    }

    const getNovedad = async (id) => {
        try {
            const res = await obtenerNovedad(id)
            setNovedad(res.data)
        } catch (error) {
            setErrorsNov(error.response.data)
        }
    }

    const updatedNovedad = async (id, novedad) => {
        try {
            await actualizarNovedad(id, novedad)
            await findAllNovedades()
        } catch (error) {
            setErrorsNov(error.response.data)
        }
    }

    useEffect(() => {
        const obtenerNovedades = async () => {
            await findAllNovedades()
        }
        obtenerNovedades()
    }, [])

    return(
        <NovedadesContext.Provider value={{
            novedades,
            novedad,
            findAllNovedades,
            getNovedad,
            createNovedad,
            updatedNovedad,
            deleteNovedad,
            errorsNov
        }}>
            {children}
        </NovedadesContext.Provider>
    )
}