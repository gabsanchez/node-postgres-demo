const User = require('../models').User

async function getUsers(request, response){
    return User.findAll({attributes : ['id', 'name', 'email']})
}

async function getUserById(request, response){
    return User.findOne({
        where: { id: Number(request.params.id) },
        attributes : ['id', 'name', 'email']
    })
}

async function createUser(request, response){
    return User.create(request.body)
}

async function updateUser(request, response){
    var userToUpdate = await User.findOne({
        where: { 
            id: Number(request.params.id) 
        },
        attributes : ['id', 'name', 'email']
    })
    if(userToUpdate){
        return User.update(request.body,{
            where: {
                id: Number(userToUpdate.id)
            }
        })
    }
    throw "User not found"
}

async function deleteUser(request, response) {
    var userToDelete = await User.findOne({
        where: { 
            id: Number(request.params.id) 
        },
        attributes : ['id', 'name', 'email']
    })
    if(userToDelete){
        return User.destroy({
            where: {
                id: Number(request.params.id)
            }
        })
    }
    throw "User not found"
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}