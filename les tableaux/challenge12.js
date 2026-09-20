const prompt=require('prompt-sync')();
let taille = Number(prompt('entrer la teiile de tableau : '))
let tableau =[]
let N_tableau=[]
for(let i=0; i<taille; i++){
    let element = Number(prompt('entrer les element de tableau : '))
    tableau.push(element)
    
}
console.log(tableau)
console.log(`les element pair de tableau est :`); 
for(let i=0; i<taille; i++ ){
    if(tableau[i] % 2 == 0){
       N_tableau.push(tableau[i])
    }
}
console.log(N_tableau)