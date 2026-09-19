const prompt = require (`prompt-sync`)();
let primeDeBase=500
let  Age = Number(prompt(`entrer l'Age `));
let Type =prompt('entrer le type de voiture ');
let Number = Number (prompt(`entrer Nombre d'accidents au cours des 5 dernières années
`));
if (Age < 25) {
    primeDeBase *= 1.5;
} else if (Age > 65) {
    primeDeBase *= 1.2;
} // si entre 25 et 65, on ne change rien

// 3. Calcul selon le type
if (Type === 1) {
    primeDeBase *= 2;
} else if (Type === 2) {
    primeDeBase *= 1.2;
} else if (Type === 3) {
    primeDeBase *= 1.1;
}

// 4. Calcul des accidents
if (accidents > 1) {
    primeDeBase *= 1.3; // +30%
}

// 5. Résultat
console.log(`Votre prime d'assurance sera de : ${primeDeBase} €`);
