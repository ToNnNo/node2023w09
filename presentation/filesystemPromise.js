const fs = require('fs').promises; // on utilise filesystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'public', 'text', 'file.txt');
const content = 'Hello Promise\r\n';

// 1. création des répertoires
// 2. créer et écrire dans le fichier file.txt
// 3. lire le fichier file.txt

fs.mkdir(path.dirname(pathfile), { recursive: true }).then(() => { // réussite de la création des répertoires
  console.log('Les répertoires ont bien créés'.green);

  return fs.writeFile(pathfile, content, { flag: 'a' });

}).then(() => { // la réussite l'écriture
  console.log('Ecriture terminée'.green);

  return fs.readFile(pathfile);

}).then((data) => { // la réussite de la lecture
  console.log(data.toString('utf8'));

}).catch((err) => {
  console.log(err);

});
