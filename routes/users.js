const User = require('../models').User

const getUsers = (request, response) => {
    return User.findAll({attributes : ['id', 'name', 'email']})
        .then((users) => {
            response.status(200).json(users)
        })
        .catch((error) => {
            response.status(400).send(error)
        })
}

const getUserById = (request, response) => {
    return User.findOne({
        where: { id: Number(request.params.id) },
        attributes : ['id', 'name', 'email']
    })
    .then((user) => {
        response.status(200).json(user)
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const createUser = (request, response) => {
    return User.create(request.body)
    .then((user) => {
        response.status(201).json('User added successfully')
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const updateUser = (request, response) => {
    User.findOne({
        where: { 
            id: Number(request.params.id) 
        },
        attributes : ['id', 'name', 'email']
    })
    .then((userToUpdate) => {
        if(userToUpdate){
            return User.update({
                where: {
                    id: Number(request.params.id)
                }
            })
            .then((user) => {
                response.status(200).json('User updated successfully')
            })
            .catch((error) => {
                response.status(400).send(error)
            })
        }
    })
    .catch((error) => {
        response.status(400).send(error)
    })
}

const deleteUser = (request, response) => {
    User.findOne({
        where: { 
            id: Number(request.params.id) 
        },
        attributes : ['id', 'name', 'email']
    })
    .then((userToDelete) => {
        if(userToDelete){
            return User.destroy({
                where: {
                    id: Number(request.params.id)
                }
            })
            .then((user) => {
                response.status(200).json('User deleted successfully')
            })
            .catch((error) => {
                response.status(400).send(error)
            })
        }
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