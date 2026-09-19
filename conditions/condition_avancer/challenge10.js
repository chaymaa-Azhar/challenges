const prompt= require(`prompt-sync`)();
let age = Number(prompt(`enter l'age : `));
let Année= Number(prompt(` entrer Année de cotisation `));
let montant= Number(prompt(` entrer montant total épargné  `));
if (age < 65){
console.log(`Plan épargne non encore disponible`);
}
else if( Année>= 30 && montant >= 100000){
  console.log(`Plan complet avec pension élevée`)
}else if ( Année>= 20 && montant >= 500000 ){
    console.log(`Plan partiel avec pension moyenne`)
}