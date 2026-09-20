const prompt=require('prompt-sync')();
let taille = Number(prompt('entrer taille de tableau : '))
let tableau =[];

for(let i=0; i<taille; i++){
    let element=Number(prompt('entre les elements de tableau : '))
    tableau.push(element)

}
console.log(tableau)

let somme =0
for(let i=0; i<taille; i++){
    somme += tableau[i]
     
}
let moyenne = somme/taille
console.log('moyenne des element d un tableau est : ', moyenne)

