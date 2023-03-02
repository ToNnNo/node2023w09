const fs = require('fs').promises; // on utilise filesystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'public', 'text', 'file.txt');
const content = 'Hello Async Await\r\n';

// 1. création des répertoires
// 2. créer et écrire dans le fichier file.txt
// 3. lire le fichier file.txt

// fonction iife (Immediatly Invoked Function Expression) => (function() { ... })()
(async () => {
  try {
    await fs.mkdir(path.dirname(pathfile), { recursive: true });
    console.log('Les répertoires ont bien créés'.green);

    await fs.writeFile(pathfile, content, { flag: 'a' });
    console.log('Ecriture terminée'.green);

    const data = await fs.readFile(pathfile);
    console.log(data.toString('utf8'));
  }catch(e){
    console.error(e);
  }
})();

