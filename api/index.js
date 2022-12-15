const http = require('http');
const pg=require('pg');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const pool=new pg.Pool({
    host:"localhost",
    port:"5432",
    database:"icecream",
    user:"icemark",
    password:"icemark"
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});