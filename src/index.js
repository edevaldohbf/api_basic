const express = require('express');
const cors = require('cors');
const settings = require('./settings/settings')
const routes = require('./settings/routes')

const app = express();
const host = settings.host;
const port = settings.port;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, host, () => console.log(`
    Server running at ${host}:${port}
`));