const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express and Postgres API' })
})

app.get('/users', routes.users.getUsers)
// app.get('/users/:id', routes.users.getUserById)
// app.post('/users', routes.users.createUser)
// app.put('/users/:id', routes.users.updateUser)
// app.delete('/users/:id', routes.users.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})