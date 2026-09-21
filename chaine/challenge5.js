const prompt = require('prompt-sync')()
const chaine='abcd'
let chaine2=''
for(let i=0; i<chaine.length; i++){
    chaine2 += chaine[chaine.length-1-i]
    
}
console.log(chaine2)
// utiliser (+=) blasst push