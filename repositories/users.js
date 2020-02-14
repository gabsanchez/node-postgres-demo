const User = require('../models').User

const getUsers = (request, response) => {
    return User.findAll({attributes : ['id', 'name', 'email']})
}

const getUserById = (request, response) => {
    return User.findOne({
        where: { id: Number(request.params.id) },
        attributes : ['id', 'name', 'email']
    })
}

const createUser = (request, response) => {
    return User.create(request.body)
}

const updateUser = (request, response) => {
    return User.findOne({
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
        }
    })
}

const deleteUser = (request, response) => {
    return User.findOne({
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
        }
    })  
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}