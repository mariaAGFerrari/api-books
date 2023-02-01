import { createUserService } from "../../services/user/createUser.service";

export const createUserController = async (req, res) => {
    const [status, user] = await createUserService(req)

    return res.status(status).json(user)
}