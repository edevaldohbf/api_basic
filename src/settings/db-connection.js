const Sequelize = require ('sequelize')

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const connection = new Sequelize (
    database,
    username,
    password,
    {
        host,
        dialect
    }
)

module.exports = connection