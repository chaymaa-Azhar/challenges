const prompt= require('prompt-sync')();
const list=[1,2,3,4,10]
let list2=[]
for(let i=0; i<list.length; i++){
    let element=list[list.length-1-i]
    list2.push(element)
}
console.log(list2)
