const prompt = require ('prompt-sync')();
let année= Number(prompt(`entrer une année : `));
let moins = année*12;
let jours = année*365;
let Heures = jours*24;
let minutes = Heures*60;
let seconde =minutes *60;
console.log(`moins = ${moins}, jour = ${jours}, Heures=${Heures}, minutes= ${minutes}, seconde = ${seconde}`)
