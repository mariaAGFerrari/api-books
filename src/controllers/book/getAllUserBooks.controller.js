import { getAllUserBooksService } from "../../services/book/getAllUserBooks.service";

export const getAllUserBooksController = (req, res) => {
    const [status, user] = getAllUserBooksService(req)

    return res.status(status).json(user)
}