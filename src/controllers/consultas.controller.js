import {create} from "../models/consultasModels.js"
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'kevinenriquep26@gmail.com',
        pass: 'ucwifclqorpskkxt'
    }
})

export const createConsulta = async (req, res) => {
    try {
        const {nombre, apellido, email} = req.body
        const result = await create(req.body)
        await transport.sendMail({
            from: 'kevinenriquep26@gmail.com',
            to: email,
            subject: 'Tu conulta fue recibida.',
            text: `Hola ${nombre} ${apellido} recibimos tu consulta. Pronto te enviaremos una respuesta!. Gracias por elegirnos!`

        })
        return res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}