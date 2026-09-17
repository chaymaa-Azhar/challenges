const prompt =require ('prompt-sync')();
let V1 =Number(prompt(`Entrez la vitesse en km/h :`));
let V2 = V1*0.27778;
console.log(` la vitesse en m/s est : ${V2}`)