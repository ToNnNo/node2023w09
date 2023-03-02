require('colors');
const http = require('http');

const server = http.createServer();

server.on("request", (request, response) => {

  console.log(`Request URL: ${request.url}`);
  let html;

  try {
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.statusCode = 200;

    switch (request.url) {
      case '/':
        html = "<h1>Bienvenue sur notre 1er server NodeJS</h1>";
        break;
      case '/contact':
        html = `<h1>Nous Contacter</h1>
  <p>Appeler nous au 09 11 82 18 00</p>`;
        break;
      case '/error':
        throw new Error('Test Erreur 500 !');
      default:
        response.statusCode = 404;
        html = "<h1>Not Found</h1>";
    }
  } catch(e) {
    response.statusCode = 500;
    html = `<h1>Internal Server Error</h1>
<hr />
<p>${e.message}</p>
`;

  }

  response.end(html);
});

const port = process.env.PORT || 3000; // PORT=5000 node server
server.listen(port);
console.log(`Personal Node Server is listenning on http://localhost:${port}`.yellow);
console.log('Shutdown Node Server with CTRL + C'.yellow);
