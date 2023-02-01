import { getSpecificBookService } from "../../services/book/getSpecificBook.service";

export const getSpecificBookController = (req, res) => {
    const [status, user] = getSpecificBookService(req)

    return res.status(status).json(user)
}