const prompt = require('prompt-sync')();
let X1 = Number (prompt('entrer points X1 : '));
let Y1 = Number (prompt('entrer point Y1 : '));
let Z1 =Number (prompt('entrer point Z1 : '));
let X2 = Number (prompt('entrer points X2 : '));
let Y2 = Number (prompt('entrer point Y2 : '));
let Z2 = Number (prompt('entrer point Z2 : '));
Distance = ((X2-X1)**2 + (Y2-Y2)**2 + (Z2-Z1)**2)**(1/2);
console.log (`la distance entre deux point donnée ${Distance}`)