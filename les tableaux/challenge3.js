const prompt= require('prompt-sync')();
let taille = Number(prompt('entrer la taille de tableau '));
let tableau =[]
let somme=0
for(let i=0; i<taille; i++){
    let valeurs=Number(prompt('entrer les valeur: '));
    tableau.push(valeurs)
    somme+=valeurs
}
 console.log(tableau);
 console.log(somme);
