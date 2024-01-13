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
        <h1>Hola Mundo</h1>
          <ul> 
            <li>Resultado de la suma es ${sum(3, 4)}</li>
            <li>Resultado de la multiplicacion es ${multiply(3, 4)}</li>
            <li>Resultado de la resta es ${min(3, 4)}</li>
            <li>Resultado de la division es ${div(3, 4)}</li>
          </ul>
    </body>
    </html>`
    );
});

server.listen(0, () => {
    console.log(
      `sever listening on port http://localhost:${server.address().port}`
    );
  });
  
