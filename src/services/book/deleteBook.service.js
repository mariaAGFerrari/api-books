import { usersList } from "../../database/users";

export const deleteBookService = (request) => {    
    const { user, book } = request

    user.books = user.books.filter((ubook) => ubook.book_id != book.book_id)

    return [200, {message: "Livro excluído"}]
}