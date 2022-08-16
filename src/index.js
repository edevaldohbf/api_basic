// const settings = require('./settings/settings')
const Ip = require('ip');
const express = require('express');
const app = express();
const routes = require('./routes');


const protocol = process.env.PROTOCOL || 'http';
const ip = Ip.address();
const port = process.env.PORT || 5000;

app.use(routes);

app.listen(port, () => console.log(`
    Server started in http://localhost:${port} or ${protocol}://${ip}:${port}
`));