import pool from "../db.js";

export async function create(novedad){
    try {
        const {titulo, descripcion, usuarioid} = novedad
        const query = "insert into novedades (titulo, descripcion, usuarioid) values (?, ?, ?)"
        const result = await pool.query(query, [titulo, descripcion, usuarioid])
        return result
    } catch (error) {
        return(error)
    }
}

export async function update(id, novedad){
    try {
        const {titulo, descripcion} = novedad
        const query = "update novedades set titulo = ?, descripcion = ? where id = ?"
        const result = await pool.query(query, [titulo, descripcion, id])
        return result
    } catch (error) {
        return(error)
    }
}

export async function deleteN(id){
    try {
        const query = "delete from novedades where id = ?"
        const result = await pool.query(query, id)
        return result
    } catch (error) {
        return(error)
    }
}

export async function findOneById(id){
    try {
        const query = "select id, titulo, descripcion from novedades where id = ?"
        const result = await pool.query(query, id)
        return result[0][0]
    } catch (error) {
        return(error)
    }
}

export async function findAll(){
    try {
        const query = "SELECT N.*, U.username FROM novedades N inner JOIN usuarios U ON N.usuarioid = U.id"
        const result = await pool.query(query)
        return result[0]
    } catch (error) {
        return(error)
    }
}