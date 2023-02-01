export const getSpecificUserService = (request) => {
    const {user} = request
    
        return [200, {
            id: user.id,
            name: user.name,
            email: user.email
        }]
    
}
