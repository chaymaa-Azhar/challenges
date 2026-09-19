const prompt=require(`prompt-sync`)();
let ligne=Number(prompt(`entrer un nombre de ligne : `));
let nombre= '*';
for(let i=1; i<ligne; i++ ){
  console.log(nombre)
  nombre+='**'
}