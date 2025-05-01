//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

const prompt = require("prompt-sync")()

let num = Number(prompt('Digite um número inteiro:'))

if(Number.isInteger(num) == false){
    console.log("O número digitado é inválido.")
}else{
    for(let i = 0; i < 10; i++){
        console.log(num)
    }
}