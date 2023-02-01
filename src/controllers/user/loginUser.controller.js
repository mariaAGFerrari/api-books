import { loginUserService } from "../../services/user/loginUser.service";

export const loginUserController = async (req, res) => {
    const [status, token] = await loginUserService(req.body)

    return res.status(status).json(token)
}