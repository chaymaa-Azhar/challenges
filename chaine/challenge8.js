const chaine = 'ABNchtf'
let M_chaine = ''
console.log(chaine)
for(let i=0; i<chaine.length; i++){
    if(chaine[i] === chaine[i].toLowerCase()){
        M_chaine += chaine[i]
    }
}
console.log(M_chaine)