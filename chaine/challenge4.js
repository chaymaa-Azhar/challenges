const prompt = require('prompt-sync')()
const chain1 ='chaymaa'
const chain2 ='chamaa'
console.log(chain1)
console.log(chain2)
for(let i=0; i<chain1.length; i++){
   if(chain1[i]===chain2[i]){
    console.log('cette caractere sont egale ')
   }else{
    console.log('le caractere ne son pas egale')
   }
}