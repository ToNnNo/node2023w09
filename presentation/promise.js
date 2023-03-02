const colors = require('colors');

function lancerDes() {
  // [0; 1[
  const value = Math.floor(Math.random() * 6 + 1);
  const fail = Math.floor(Math.random() * 3 + 1);

  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      if( fail === 1 ) {
        reject('Cassé');
      }

      resolve(value);
    }, 1000);
  });
}

/*lancerDes().then( (value) => { // la réussite
  console.log(`Résultat obtenu: ${colors.green(value)}`);
}).catch( (error) => { // l'échec
  console.log(error.red);
}).finally( () => { // dans tous les cas
  console.log('Recommencer ?'.yellow);
});*/

lancerDes() // 1er lancé
.then( (value) => { // la réussite du 1er lancé
  console.log(`1er résultat obtenu: ${colors.green(value)}`);

  return lancerDes(); // 2nd lancé
}).then( (value) => { // réussite du 2nd lancé
  console.log(`2nd résultat obtenu: ${colors.green(value)}`);

}).catch( (error) => { // l'échec est commun au 2 lancés
  console.log(error.red);
}).finally( () => { // dans tous les cas
  console.log('Recommencer ?'.yellow);
});
