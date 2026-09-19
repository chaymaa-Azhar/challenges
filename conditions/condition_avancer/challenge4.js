const prompt= require(`prompt-sync`)();
let score = Number (prompt(`entrer Score de performance `));
let ancienneté = Number (prompt(`entrerAncienneté (en années): `));
let Récompenses_reçues = Number (prompt(`entrer Récompenses reçues`));
if(score>=90 && ancienneté >=5 ){
    console.log(`Exellente`)
}else if(score>=75 && ancienneté < 3){
        console.log(`Bonne`)
}else if(score>=50 && ancienneté < 3){
        console.log(`Satisfaisante`)
}else if(score < 50 ){
   console.log(`Satisfaisante`)
}