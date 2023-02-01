import { v4 } from 'uuid'

export const createBookService = (request) => {
    const {user} = request

    const newBook = {
        book_id: v4(),
        name: request.body.name,
        author: request.body.author,
        category: request.body.category,
    }

    user.books.push(newBook)

    return [201, newBook]
    
}

