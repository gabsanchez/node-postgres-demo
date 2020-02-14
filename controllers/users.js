const usersService = require('../services/users')

const getUsers = (request, response) => {
    return usersService.getUsers(request, response)
}

const getUserById = (request, response) => {
    return usersService.getUserById(request, response)
}

const createUser = (request, response) => {
    return usersService.createUser(request, response)
}

const updateUser = (request, response) => {
    return usersService.updateUser(request, response)
}

const deleteUser = (request, response) => {
    return usersService.deleteUser(request, response)   
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}