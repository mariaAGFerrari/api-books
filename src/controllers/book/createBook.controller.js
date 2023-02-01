import { createBookService } from "../../services/book/createBook.service";

export const createBookController = (req, res) => {
    const [status, book] = createBookService(req)

    return res.status(status).json(book)
}