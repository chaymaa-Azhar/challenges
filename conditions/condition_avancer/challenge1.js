const prompt = require('prompt-sync')();
let revenu = Number (prompt(`entrer revenu annuel `));
let score = Number (prompt(`entrer le score de crédit `));
let Durée = Number (prompt(`entrer durée du prét `))
if(revenu>=30000 && score>=700 && Durée<= 10){
    console.log(`Statut : Éligible`);
}else if(revenu >= 3000 && score >= 650 && Durée<= 15){
    console.log(`Statut : Éligible avec conditions`);
}else {
    console.log(`Statut : Non éligible`);
}