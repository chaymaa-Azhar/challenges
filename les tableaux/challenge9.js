const prompt= require('prompt-sync')();
const list=[1,2,3,4,5];
let list2=[];
for(let i=0; i<list.length; i++){
    list2[i]= list.length +1 -list[i]
}
console.log(list2)
