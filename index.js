const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

//Controllers
const usersController = require('./controllers/users')

//Routes
const routes = require('./routes')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express and Postgres API' })
})

app.get(routes.users, usersController.getUsers)
app.get(routes.userById, usersController.getUserById)
app.post(routes.users, usersController.createUser)
app.put(routes.userById, usersController.updateUser)
app.delete(routes.userById, usersController.deleteUser)

app.listen(process.env.API_PORT, () => {
    console.log(`App running on port ${process.env.API_PORT}.`)
})