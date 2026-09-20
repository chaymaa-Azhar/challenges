const prompt=require('prompt-sync')()
let taille1 = Number(prompt('entre la taille de 1er tableau '))
let taille2 = Number(prompt('entre la taille de 2eme tableau '))
let tableau1=[]
let tableau2=[]
for(let i=0; i<taille1; i++){
    let element1=Number(prompt('entre les element de 1 er tableau :  '))
    tableau1.push(element1)
}
console.log(tableau1)

for(let i=0; i<taille2; i++){
    let element2=Number(prompt('entre les element de 2eme tableau :  '))
    tableau2.push(element2)
}
console.log(tableau2)

tableau1.push(...tableau2)
console.log('le tableau aprer fusion : ',tableau1)
/*const fusion =tableau1.concat(tableau2)
console.log(fusion)*/

