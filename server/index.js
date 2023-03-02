require('colors');
const http = require('http');
const myModule = require('./myModule');
const mime = require('mime-types');

const server = http.createServer();

server.on("request", async (request, response) => {

  console.log(`Request URL: ${request.url}`);
  let html;

  // modifier l'index pour qu'il puisse lire les fichiers qui se trouvent dans le répertoire public/
  // l'extension des fichiers dans la requête peut être optionnel

  // request == /                 -> index.html
  // request == /index.html       -> index.html
  // request == /contact.html     -> contact.html

  try {
    response.statusCode = 200;

    let page = request.url;
    if( page === "/") {
      page = "index.html";
    }

    if( !page.includes(".") ) {
      page += ".html";
    }

    response.setHeader('Content-Type', mime.lookup(page) || 'text/plain');

    try {
      html = await myModule.read(page);
    } catch (e) {
      response.statusCode = 404;
      html = await myModule.read('errors/404.html');
    }

  } catch(e) {
    response.statusCode = 500;
    console.log(e.message.red);
    html = await myModule.read('errors/500.html');
  }

  response.end(html);
});

const port = process.env.PORT || 3000; // PORT=5000 node server
server.listen(port);
console.log(`Personal Node Server is listenning on http://localhost:${port}`.yellow);
console.log('Shutdown Node Server with CTRL + C'.yellow);
