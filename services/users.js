const usersRepository = require('../repositories/users')

const getUsers = (request, response) => {
    return usersRepository.getUsers(request, response)
    .then((users) => {
        response.status(200).json(users)
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const getUserById = (request, response) => {
    return usersRepository.getUserById(request, response)
    .then((user) => {
        response.status(200).json(user)
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const createUser = (request, response) => {
    return usersRepository.createUser(request, response)
    .then((result) => {
        response.status(201).json('User added successfully')
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const updateUser = (request, response) => {
    return usersRepository.updateUser(request, response)    
    .then((user) => {
        response.status(200).json('User updated successfully')
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const deleteUser = (request, response) => {
    return usersRepository.deleteUser(request, response)  
    .then((user) => {
        response.status(200).json('User deleted successfully')
    })
    .catch((error) => {
        response.status(400).send(error)
    }) 
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}