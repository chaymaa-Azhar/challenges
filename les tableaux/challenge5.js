const prompt=require('prompt-sync')();
let taille=Number(prompt('entrer la taille de tableau : '));
let tableau =[];
let min=0;
for(let i=0; i<taille; i++){
    let valeur=Number(prompt('entrer les valeurs de tableau  '))
    tableau.push(valeur)
    if(taille[i]<min){
        min=taille[i]
    }

}
console.log(tableau)
console.log(`${min} est la valeur plus petite `)