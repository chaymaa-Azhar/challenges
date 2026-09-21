const chaine = 'cc45aa6h5h' 
let compteur=0
let c_caracter = 0
for(let i=0; i<chaine.length; i++){
  if(chaine[i] >=0 ){
     compteur++
  }else {
      c_caracter++
  }
}
console.log(compteur)
console.log(c_caracter)
