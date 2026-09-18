const prompt = require(`prompt-sync`)();
let nombre = Number(prompt(`entrer un nombre : `));
if (nombre<0){
    console.log(`le nombre est negatif `)
}else if(nombre>0){
  console.log(`le nomre est positif `)
}else{
    console.log(`le nombre égale a 0 `)
}