const prompt=require('prompt-sync')();
let taille=Number(prompt('entrer la taille de tableau : '));
let tableau =[];

for(let i=0; i<taille; i++){
    let valeur=Number(prompt('entrer les valeurs de tableau  '))
    tableau.push(valeur)
}
console.log(tableau)


let min =tableau[0]

for(let i=0; i<taille; i++){
    if(tableau[i]<min){
        min = tableau[i]
    }

}
console.log(`${min} est la valeur plus petite `)