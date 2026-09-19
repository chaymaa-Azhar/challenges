const prompt= require('prompt-sync')();
let taille = Number(prompt('entrer la taille de nombre : '));
let tableau=[];
let element_recherche=Number(prompt('entrer élement doit recherche  : '));

for(let i=0; i<taille; i++){
    let elements= Number(prompt('enter les elements d un tableau : '))
    tableau.push(elements)
}
   const recherche= tableau.find((elements) => elements === element_recherche)

console.log('element que tu es rechercher est ' ,recherche)