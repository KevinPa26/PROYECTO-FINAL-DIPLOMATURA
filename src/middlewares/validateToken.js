import jwt from 'jsonwebtoken'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    if(!token) return res.status(401).json({message: 'no existe token, autorización denegada'})
    jwt.verify(token, 'secret123', (err, decode) => {
        if(err) return res.status(403).json({message: 'token invalido'})
        req.user = decode
        next()
    })
}