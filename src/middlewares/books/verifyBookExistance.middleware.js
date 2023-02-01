export const verifyBookExistanceNameMiddleware = (req, res, next) => {
    const { bookId } = req.params
    const { user } = req

    const found = user.books.find(book => book.book_id == bookId)

    if(!found) {
        return res.status(400).json({ message: 'Livro não cadastrado' });
    }

    req.book = found

    next()

}