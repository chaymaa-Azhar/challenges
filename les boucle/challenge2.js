const prompt= require(`prompt-sync`)();
// 1. Saisie de n
let n = Number (prompt("Entrez un entier positif pour la factorielle :"));

// 2. Initialisation à 1
let factorielle = 1;

// 3. Boucle de 1 à n
for (let i = 1; i <= n; i++) {
    // 4. On multiplie et on accumule
    factorielle *= i; // équivalent à : factorielle = factorielle * i
}

console.log(`${n}! = ${factorielle}`);