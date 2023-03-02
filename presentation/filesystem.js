const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'public', 'text', 'file.txt');
const content = 'Hello World\r\n';

// 1. création des répertoires
// 2. créer et écrire dans le fichier file.txt
// 3. lire le fichier file.txt

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, (error) => {
  if(error) {
    throw error;
  }

  console.log('Les répertoires ont bien créés'.green);

  fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
    if(err) throw err;

    console.log('Ecriture terminée'.green);

    fs.readFile(pathfile, (err, data) => {
      if(err) throw err;

      // console.log(data.toString('utf8'));
      console.log(`${data}`);
    });
  });
});
