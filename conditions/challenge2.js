const prompt = require('prompt-sync')();
let number = Number(prompt('entrer un nombre : '));
if (number % 2 === 0 ) {
    console.log(`ble nombre ${number} est pair`);
}else{
    console.log(`le nombre ${number } est impair .`);
}



