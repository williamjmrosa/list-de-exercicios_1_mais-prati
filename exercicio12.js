// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.    

const prompt = require("prompt-sync")()

let numero = Number(prompt('Digite um número para ver a tabuada:'))
let resultado = 0

if(Number.isInteger(numero) == false){
    console.log("O número digitado é inválido.")
}else{

    console.log("A tabuada do número " + numero + " é:")

    for(let i = 1; i <= 10; i++){
        resultado = numero * i
        console.log(numero," x ", i, "=", resultado)
    }
}