import { usersList } from "../../database/users";

export const verifyDuplicateEmailMiddleware = (req,res, next) => {
    const {email} = req.body

    const user = usersList.find((u) => u.email == email)

    if(user) {
        return res.status(400).json({ message: 'Usuário já possui cadastro' });
    }

    return next();
}