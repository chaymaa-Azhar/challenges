const prompt =require('prompt-sync')()
let chaine1 = prompt('entrer une chaine : ')
let chaine2 = prompt ('entrer sous_chaine dans la chaine ')
for(let i=0; i<chaine1.length; i++){
    if(chaine1.includes(chaine2)){
        console.log("sous chaine est trouver dans cette chaine ")
    }else{
        console.log("sous chaine est absence ")
    }
}
