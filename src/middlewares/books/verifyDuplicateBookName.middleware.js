export const verifyDuplicateBookNameMiddleware = (req, res, next) => {

    const { name } = req.body
    const { user } = req

    const found = user.books.find(book => book.name == name)
    
    if(found) {
        return res.status(400).json({ message: 'Livro já cadastrado' });
    }

    next()

}