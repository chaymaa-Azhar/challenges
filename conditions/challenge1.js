const prompt = require('prompt-sync')();
let lettre = prompt (' entrer un caractére : ').toLowerCase();
switch (lettre){
    case 'a':
    case 'o':
    case 'u':
    case 'y':
    case 'i':
console.log('le caractére qui utilisateur saisi ${lettre} est voyelle');
  break;
default:
           console.log(`La lettre "${lettre}" est une consonne (ou un autre caractère).`);


}