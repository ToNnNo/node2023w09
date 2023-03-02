// require() est une fonction de NodeJS (commonJS) qui permet de récupérer des modules NodeJS
// défini dans l'application (module personnel), dans les dépendances (node_modules), ou dans l'API de NodeJS
const path = require('path');
require('colors');

const file = "./content/file.txt";

console.log(`path.dirname(): ${path.dirname(file).red}`); // affiche le répertoire parent
console.log(`path.basename(): ${path.basename(file).yellow}`); // affiche le nom du fichier
console.log(`path.extname(): ${path.extname(file).green}`); // affiche l'extension d'un fichier

console.log(`séparateur système: ${path.sep.yellow}`);

// Créer un chemin vers le fichier image.png, se trouvant dans un répertoire images,
// se trouvant dans une répertoire public

const pathToImage = path.join('public', 'images', 'image.png');
console.log(`Chemin vers mon image: ${pathToImage.green}`);

// const absolutePathToImage = path.join(__dirname, pathToImage);
const absolutePathToImage = __dirname + path.join(path.sep, 'public', 'images', 'image.png');
console.log(absolutePathToImage.yellow);

// resolve()
console.log( path.resolve('public', 'images', 'image.png') );
