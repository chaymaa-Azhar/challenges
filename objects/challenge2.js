let etudiant ={
    nom: 'chaymaa ',
    prenom:'azhar',
    note : [1,2,3,4]
}
console.log(`le nom est ${etudiant.nom}`)
console.log(`le prenom est ${etudiant.prenom}`)
console.log(`les notes est `+ etudiant.note.join(" , "))
let somme =0
for(let note of etudiant.note){
    somme+=note
}
moyenne = somme/etudiant.note.length
console.log(moyenne)






