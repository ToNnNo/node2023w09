require('colors');

// import commonjs => module Node
const hello = require('./extension/useless');
// const customMath = require('./extension/customMath');
const { addition } = require('./extension/customMath');

// import ESM => module EcmaScript
import Voiture from './extension/Voiture.js';
import path from 'path';

console.log( hello('James').green, hello().yellow );

/* console.log(`PI = ${customMath.PI}`);
console.log(customMath.addition(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45 */

console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45

const voiture = new Voiture('Citroen', 'DS3');
console.log( voiture.detail().magenta );

console.log( path.basename(__filename).blue );
