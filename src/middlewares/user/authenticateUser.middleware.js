import jwt from 'jsonwebtoken'
import { config } from '../../config'

export const authenticateUser = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).json({message: "Não autorizado. Login é necessário"})
    }

    const token = req.headers.authorization.split(" ")[1]

    jwt.verify(token, config.secretKey, (error, decoded) => {
        if (error) {
            return res.status(401).json({message: "Token inválido"})
        }

        req.userID = decoded.id

        return next()
    })
}