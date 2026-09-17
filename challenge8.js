const prompt = require(`prompt-sync`)();
let a = Number(prompt(`Entrer 1er nombre :`));
let b = Number (prompt (`Entrer 2eme nombre `));
let c = Number (prompt (`Entrer 3eme nombre `));
let moyenne_geométrique =  (a * b * c)**(1/3);
console.log(`Moyenne géométrique = ${moyenne_geométrique}`)