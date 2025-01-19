const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(middlewares);
// server.use(cors());
server.use(router);

const PORT = process.env.PORT || 3005;


server.listen(PORT);

