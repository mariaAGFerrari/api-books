export const updateBookService = (request) => {    
    const {book, user} = request

    const keys = Object.keys(request.body)

    if(keys.includes('book_id') || keys.includes('user_id')) {
        return [400, "'book_id' e 'user_id' não podem ser modificados"]
    }

    const updatedBook = {
        ...book,
        ...request.body
    }
    const index = user.books.indexOf(book)

    user.books[index] = updatedBook

    return [200, {
        message: "Livro atualizado",
        book: {
            book_id: updatedBook.book_id,
            name: updatedBook.name,
            author: updatedBook.author,
            category: updatedBook.category
        }
    }]
}