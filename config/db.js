const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
})

// var Sequelize = require('sequelize')
// var sequelize = new Sequelize(
//     'api', 
//     'me', 
//     'password', {
//         host: 'localhost',
//         port: 5432,
//         dialect: 'postgres'
//     }
// )

module.exports = {
    pool
    //sequelize
}