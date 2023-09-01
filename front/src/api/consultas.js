import instance from "./axios"

export const crearConsulta = (consulta) => instance.post(`/consultas`, consulta)