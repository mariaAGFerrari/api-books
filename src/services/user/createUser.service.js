import { usersList } from '../../database/users';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

export const createUserService = async (request) => {
    const { name, email, password } = request.body 
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        id: v4(),
        name,
        email,
        password: hashedPassword,
        books: []
    }

    usersList.push(newUser)

    return [201, {
       id: newUser.id,
        name,
        email,
        books: newUser.books
    }]
}