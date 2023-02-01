import { usersList } from "../../database/users";

export const verifyUserExistanceMiddleware = (req,res, next) => {
    const {id} = req.params

    const user = usersList.find((u) => u.id == id)

    if(!user) {
        return res.status(400).json({ message: 'Usuário não possui cadastro' });
    }

    req.user = user

    return next();
}