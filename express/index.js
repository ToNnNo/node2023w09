require('colors');
const express = require('express');
const path = require('path');
require('twig');
const router = require('./router.js');
const bodyParser = require('body-parser');

const app = express();

app.set('views', __dirname + '/template');
app.set('twig options', {
  strict_variables: false,
  autoescape: true
});

// middleware
app.use((req, res, next) => {
  console.log(`Request: ${req.url} | Method: ${req.method}`);
  next(); // la fonction next() permet de passer au middleware suivant
});
app.use( express.static(path.join(__dirname, 'public')) );

// lire les données envoyées en POST et de les mettre dans un attribut "body" (objet) de request
app.use( bodyParser.urlencoded({ extended: true }) );

// routes
app.use(router);

app.use((req, res) => {
  res.status(404).render('errors/404.html.twig');
});

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  res.status(status).render('errors/500.html.twig', {
    error: err.message
  });
})

const port = process.env.PORT || 3200;
app.listen(port, 'localhost', () => {
  console.log(`Personal Node Server is listening on http://localhost:${port}`.yellow);
  console.log('Shutdown Node Server with CTRL + C'.yellow);
});
