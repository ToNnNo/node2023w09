// Mettre le mot clé async devant une fonction permet de transformer la fonction en Promesse
// Dans une fonction async, utiliser le mot clé return permet d'avoir une Promesse en réussite (resolve)
async function doSomething() {
  return "Bravo !";
}

// Dans une fonction async, utiliser le mot clé throw permet d'avoir une Promesse en échec (reject)
async function doSomethingElse() {
  throw new Error("aie aie aie ...");
}

/*doSomething().then((message) => {
  console.log(message);
});

doSomethingElse().catch((error) => {
  console.log(error);
});*/

function randomNumber() {
  const number = Math.floor(Math.random() * 10);

  return new Promise((resolve) => {
    setTimeout( resolve, 2500, [number]);
  })
}

async function addition() {

  try {
    console.log('Récupération de la première valeur');
    const a = parseInt(await randomNumber());
    console.log('Première valeur récupérée');

    console.log('Récupération de la seconde valeur');

    const b = parseInt(await randomNumber());
    console.log('Seconde valeur récupérée');

    console.log("Addition");
    console.log( `${a} + ${b} = ${ a+b }` );
  }catch(e){
    console.error(e);
  }
}

addition();
