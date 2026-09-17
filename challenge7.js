const prompt =require(`prompt-sync`)();
let N1 = Number(prompt(`Entrer 1er number : `));
let N2 = Number (prompt (`Entrer 2eme number :`));
let N3 = Number (prompt (`Entrer 3eme number :`));
let pondération1 = 2;
let pondération2 = 3;
let pondération3 =5;
let somme_pondérations= pondération1 + pondération2 + pondération3;
let somme_pondéréé= ((N1*pondération1)+(N2*pondération2)+ (N3*pondération3));
let moyenne = somme_pondéréé / somme_pondérations ;
console.log(`moyenne pondéréé est ${somme_pondéréé}/${somme_pondérations} = ${moyenne}`);

