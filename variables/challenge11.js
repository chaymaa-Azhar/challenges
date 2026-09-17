const prompt= require(`prompt-sync`)();
let longeur = Number(prompt('entrer la longeur :'));
let largeur = Number (prompt('entrer la largeur : '));
let surface = longeur / largeur;
console.log(`la surface d'un rectangle est ${surface}`);


