import mysql from 'mysql2/promise'
import util from 'util'

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectofinaldiplo'
})

// pool.query = util.promisify(pool.query)
//sacar util, mysql
//usarmo mysql2

export default pool