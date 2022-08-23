const { generateToken } = require("../utils/token");

const userModel = {
    id: 1,
    username: "root",
    password: "123456"
}

module.exports = {
    async login (username, password) {
        let auth = {
            token: false
        }

        if (username === userModel.username) {
            if (password === userModel.password) {
                auth.token = await generateToken(userModel.id, userModel.username, userModel.password)
            }
            else {
                return -1;
            }
        }
        else {
            return -1;
        }

        return auth;
    },

    async read () {
        return userModel
    }
}