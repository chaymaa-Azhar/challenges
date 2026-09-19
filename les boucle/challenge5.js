const prompt= require('prompt-sync')();
let base= Number(prompt(`entrer un nombre entier : `));
let exposant = Number(prompt(`entrer un nomre exposant : `));
let resultat = 1
for( let i=1; i<exposant; i++){
    resultat*=base;
}
console.log(resultat) 