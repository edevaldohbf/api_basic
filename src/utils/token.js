const settings = require('../settings/settings')
const jwt = require('jsonwebtoken');

const responseToken = {
    status: false,
    message: false,
    data: [],
}

module.exports = {
    async generateToken(id, username, password) {
        const token = jwt.sign(
            {
                id,
                username,
                password,
            },
            settings.jwtSecret,
            // {
            //     expiresIn: settings.tokenTimeExp
            // }
        );

        return token;
    },

    async verifyToken (req, res, next) {
        let token = req.headers.authorization;
        token = token?.split(" ")[1]

        if (!token) {
            responseToken.status = 'ERROR';
            responseToken.message = 'Token não enviado';

            return res.status(401).send({
                responseToken
            });
        }

        try {
            jwt.verify(token, settings.jwtSecret)
        }
        catch (err) {
            responseToken.status = 'ERROR';
            responseToken.message = 'Token errado';
            return res.status(401).send({
                responseToken
            });
        }
        
        next();
    }
}