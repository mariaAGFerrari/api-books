import { getSpecificUserService } from "../../services/user/getSpecificUser.service";

export const getSpecificUSerController = (req, res) => {
    const [status, user] = getSpecificUserService(req)

    return res.status(status).json(user)
}