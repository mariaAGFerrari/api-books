import { updateBookService } from "../../services/book/updateBook.service";

export const updateBookController = async (req, res) => {
    const [status, user] = await updateBookService(req)

    return res.status(status).json(user)
}