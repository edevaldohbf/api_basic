const connection = require('../settings/db-connection')

module.exports = {
    async create (username, password) {
        const [, affectRows] = await connection.query(`
            INSERT INTO users VALUES (DEFAULT, '${username}', '${password}', NOW(), NOW())
        `)

        let response = affectRows > 0

        return response
    },

    async login (req, res) {
        const { username, password } = req.body;

        const [, data] = await connection.query(`
            SELECT * FROM users WHERE username='${username}' AND password='${password}'
        `)

        console.log(data)

        let response = affectRows > 0

        return response
    }
}