// dans un terminal : node path/to/file.js
const name = 'Stephane';
let city;

console.log(name);

console.log("Hello World", 10, true);

console.log("Bonjour %s, comment ca va ?", name); // NodeJS
console.log(`Bonjour ${name}, comment ca va ?`); // EcmaScript
console.log('Bonjour ' + name + ', comment ca va ?'); // ES/JS

city = "Lille";

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

// async -> operation bloquante
setTimeout( () => {
  console.log("J'ai été executé après 1 seconde");
}, 1000);

// sync
console.log("Fin de la page");
