const chaine = 'ABeryyi'
let chaine2 = ''
console.log(chaine)
for(let i=0; i<chaine.length; i++){
    if(chaine[i] === chaine[i].toUpperCase()){
        chaine2 += chaine[i]
    }
}
console.log(chaine2)
