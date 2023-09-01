import instance from "./axios"

export const obtenerNovedades = () => instance.get(`/novedades`)

export const obtenerNovedad = (id) => instance.get(`/novedades/${id}`)

export const crearNovedad = (novedad) => instance.post(`/novedades`, novedad)

export const actualizarNovedad = (id, novedad) => instance.put(`/novedades/${id}`, novedad)

export const eliminarNovedad = (id) => instance.delete(`/novedades/${id}`)
