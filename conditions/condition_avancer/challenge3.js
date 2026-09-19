const prompt= require(`prompt-sync`)();
let jour_accordés = Number(prompt(`entrer le Nombre total de jours de congés accordés `));
let jour_utilisés=  Number (prompt(`entrer Nombre de jours de congés utilisés
 `));
let statut= Number(prompt(`Statut de l'employé : `));
if(statut===0){
    console.log(`les jours de congé restants ${jour_accordés-jour_utilisés}`);
}else if(statut===1){
        console.log(`les jours de congé restants ${(jours_accordés / 2) - jour_accordés}`);

}
if(jour_utilisés>jour_accordés){
  alert(` les jours utilisés dépassent les jours accordés`)
}
