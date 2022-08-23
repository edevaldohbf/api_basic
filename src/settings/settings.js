require("dotenv").config({ silent: true });

module.exports = {
    port: process.env.PORT || 5000,
    host: process.env.HOST || "localhost",
    jwtSecret: process.env.JWT_SECRET,
    tokenTimeExp: process.env.TOKEN_TIME_EXP
}