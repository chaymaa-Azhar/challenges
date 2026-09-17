const prompt = require(`prompt-sync`)();
let C = prompt(`Entrer la température en celsius : `);
if (C < 0){
    console.log(`l'état de l'eau solide`);
}else if (0<=C && C <100){
    console.log(`l'état de l'eau est Liquide`);
}else{
    console.log(`l'état de l'eau est gaz`);
}