import { create, findOneByEmail, findOneById } from "../models/usuariosModels.js"
import { createAccessToken } from "../libs/jwt.js"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const findUser = await findOneByEmail(req.body.email)
        if(findUser) return res.status(400).json({message: 'El email esta en uso'})
        const result = await create(req.body)
        const token = await createAccessToken({id: result.id})
        res.cookie('token', token)
        return res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const usuario = await findOneByEmail(email)

        if(!usuario) return res.status(400).json({message: 'usuario no encontrado'})

        const passValido = await bcryptjs.compare(password, usuario.password)

        if(!passValido) return res.status(400).json({message: 'contrasena incorrecta'})

        const token = await createAccessToken({id: usuario.id})

        res.cookie('token', token)
        res.json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const logout = (req, res) => {
    res.cookie('token', '', {expires: new Date(0)})
    return res.sendStatus(200)
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies
    
    if(!token) return res.statu(401).json({message: 'No esta logeado'})

    jwt.verify(token, 'secret123', async (err, user) => {
        if(err) return res.statu(401).json({message: 'No esta logeado'})

        const usuario = await findOneById(user.id)

        if(!usuario) return res.statu(401).json({message: 'No esta logeado'})

        return res.json(usuario)
    })
}

export const profile = async (req, res) => {
    try {
        const usuario = await findOneById(req.user.id)
        if(!usuario) return res.status(400).json({message: 'usuario no encontrado'})
        return res.json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}