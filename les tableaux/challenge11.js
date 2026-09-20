const prompt=require('prompt-sync')();
let taille = Number(prompt('entre la taille de taleau : '))
let Valeur_remplacer = Number(prompt('entre la valeur remplacer dans le tableau : '))
let valeur_Nouvelle = Number(prompt('entre la Nouvelle valeur : '))
let tableau =[]
for(let i=0; i<taille; i++){
    let element=Number(prompt('entrer les element de tableau '))
    tableau.push(element)
}
console.log(tableau)
for(let i=0; i<taille; i++){
    if(tableau[i] === Valeur_remplacer ){
        tableau[i] = valeur_Nouvelle
    
    }

}
console.log(tableau)
