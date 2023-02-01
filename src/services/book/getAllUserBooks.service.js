export const getAllUserBooksService = (request) => {
    const { user } = request

    const books = user.books

    return [200, books]
}