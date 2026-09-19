const prompt = require(`prompt-sync`)();
let n= Number(prompt(`entrer un nombre entier :`));
let somme =0
for(let i=1; i<=n; i++){
   somme+=i
}
console.log(somme)