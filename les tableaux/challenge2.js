const prompt=require('prompt-sync')();
let taille= Number(prompt('entrer la taille de tableau'))
let tableau=[];
for(let i=0; i<taille; i++){
    let valeur = Number(prompt('entrer les valeur '))
    tableau.push(valeur);
}
    console.log(tableau);

