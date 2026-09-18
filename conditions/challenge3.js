const prompt = require ('prompt-sync')();
let V1= Number (prompt('entrer la premier valeur : '));
let V2 = Number (prompt('entrer 2éme valeur : '));
let trip_somme = (V1 + V2)*3;
if( V1 === V2){ 
   console.log(` les valeur les deux valeur sont identiquer donc le triple de la somme est ${trip_somme}`)
}else{
    console.log(' les valeur les deux valeur son pas identiquer ')
}