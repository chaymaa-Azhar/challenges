const prompt = require('prompt-sync')();
let taille = Number(prompt("entrer la taille de tableau "));
let facteur = Number(prompt("entrer nombre multipier de votre tableau "));
let tableau = [];
let r_tableau=[];

for (let i=0; i<taille; i++){
    let valeur = parseInt(prompt('entrer les valeurs '));
    tableau.push(valeur)
}
console.log(tableau)
console.log(' multiplicantions de facteur est : ')
    for (let i=0; i<taille; i++){
     let multiple=  tableau[i]*facteur
     r_tableau.push(multiple)
}
console.log(r_tableau)
/*//autre methode(map) 
let taille =Number(prompt('entre la taille de tableau :'))
let factorie = Number(prompt('entre la factorie  :'))
let tableau =[]
for(let i=0; i<taille; i++){
  let element =Number(prompt('entrer les element de tableau : '))
  tableau.push(element)
}
console.log(tableau)

let r_tableau=tableau.map((element)=>element*factorie)
console.log(r_tableau)*/
