const prompt =require('prompt-sync')();
let taille = Number(prompt('entrer teille de tableau '));
let tableau =[];
for(let i=0; i<taille; i++){
    valeurs=Number(prompt('entrer les valeur de tableau '))
    tableau.push(valeurs)
}
tableau.sort((a, b) => a - b)
console.log(tableau)
 