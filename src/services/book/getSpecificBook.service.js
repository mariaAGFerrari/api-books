import { usersList } from "../../database/users";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'

dotenv.config()

export const getSpecificBookService = (request) => {
    const {user} = request

    const bookId = request.params.bookId

    const bookExists = user.books.find(book => book.book_id == bookId)

    if(!bookExists) {
        return [409, {message: "Livro não encontrado!"}]
    }

    return [200, bookExists]
}