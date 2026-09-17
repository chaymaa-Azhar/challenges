const prompt= require('prompt-sync')();
let R = Number(prompt('entrer le rayon de la sphére : '));
const p =3.14;
let volume = (4/3)* p * R**3;
console.log(`le volume d'une sphére : ${volume} `)

