import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import { usersList } from "../../database/users";
import { config } from "../../config";

export const loginUserService = async (request) => {
    const {email, password} = request

    const user = usersList.find((u) => u.email == email)

    if(!user) {
        return [400,{ message: 'Usuário não possui cadastro'}];
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
        return [401, {message: "E-mail ou senha inválidos"}]
    }

    const token = jwt.sign(
        {email},
        config.secretKey,
        {expiresIn: config.expiresIn, subject: user.id}
    )

    return [200, {
                    token, 
                    userID: user.id
                }
            ]
}
