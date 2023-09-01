import pool from "../db.js";

export async function create(nuevaConulta){
    try {
        const {nombre, apellido, email, consulta} = nuevaConulta
        const query = "insert into consultas (nombre, apellido, email, consulta) values (?, ?, ?, ?)"
        const result = await pool.query(query, [nombre, apellido, email, consulta])
        return result
    } catch (error) {
        return(error)
    }
}