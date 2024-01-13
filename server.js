const { sum, multiply, min, div } = require('./data.js');

const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end(`<!DOCTYPE html> <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sprint 10 Entregable 2</title>
    </head>
    <body>
        <h1>Hola Mundo ${sum(3, 4)}</h1>
    </body>
    </html>`
    );
});

server.listen(0, () => {
    console.log(
      `sever listening on port http://localhost:${server.address().port}`
    );
  });
  
