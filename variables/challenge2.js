const prompt=require('prompt-sync')();
let c = parseFloat(prompt('entrez la température en celsius : '));
let K= c + 273.15 ;
console.log(`la température en kelvin est ${K}`);