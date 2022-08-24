const userService = require('../services/userService');

module.exports = {
    async login (req, res) {
        const responseModel = {
            status: false,
            message: false,
            data: false,
        }

        const { username, password } = req.body;

        if ((!username) || (!password)) {
            responseModel.status = 'ERROR';
            responseModel.message = 'Favor preencher todos os campos da requisição';
            return await res.status(401).send(responseModel);
        }

        let auth = await userService.login(username, password);

        if (auth == -1) {
            responseModel.status = 'ERROR';
            responseModel.message = 'Usuario ou senha incorretos';
            return await res.status(401).send(responseModel)
        }

        responseModel.status = 'SUCCESS';
        responseModel.message = '';
        responseModel.data = auth;

        return await res.status(200).send(responseModel)
    },

    async read (req, res) {
        let objUser = await userService.read()

        return res.send(objUser)
    }
}