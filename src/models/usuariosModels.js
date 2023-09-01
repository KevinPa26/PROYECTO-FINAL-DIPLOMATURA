import pool from "../db.js";
import bcryptjs from "bcryptjs"

export async function create(usuario){
    try {
        const {username, email, password} = usuario
        const passHash = await bcryptjs.hash(password, 10)
        const query = "insert into usuarios (username, email, password) values (?, ?, ?)"
        const result = await pool.query(query, [username, email, passHash])
        return {username, email, passHash, id: result[0].insertId}
    } catch (error) {
        return(error)
    }
}

export async function findOneByEmail(email){
    try {
        const query = "select id, username, email, password from usuarios where email = ?"
        const result = await pool.query(query, email)
        return result[0][0]
    } catch (error) {
        return(error)
    }
}

export async function findOneById(id){
    try {
        const query = "select id, username, email, password from usuarios where id = ?"
        const result = await pool.query(query, id)
        return result[0][0]
    } catch (error) {
        return(error)
    }
}