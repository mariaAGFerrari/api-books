import { deleteBookService } from "../../services/book/deleteBook.service";

export const deleteBookController = (req, res) => {
    const [status, message] = deleteBookService(req)

    return res.status(status).json(message)
}