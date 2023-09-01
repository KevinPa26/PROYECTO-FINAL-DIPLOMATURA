import express from "express";
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import appRoutes from './routes/auth.routes.js'
import novedadesRoutes from './routes/novedades.routes.js'
import consultaRoutes from './routes/consultas.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api',appRoutes)
app.use('/api',novedadesRoutes)
app.use('/api',consultaRoutes)

export default app;