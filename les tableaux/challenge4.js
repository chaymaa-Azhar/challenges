const prompt=require('prompt-sync')();
let taille= Number(prompt('entrer la taille de tableau : '))
let tableau=[]
let max=0
for(i=0; i<taille; i++ ){
    let valeurs=Number(prompt('enter les valeurs : '))
    tableau.push(valeurs)
    if( tableau[i]>max){
        max = tableau[i]
    }
}
console.log(tableau);
console.log(max )