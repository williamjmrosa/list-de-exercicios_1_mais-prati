// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")()

let numero = Number(prompt('Digite um número para calcular o fatorial:'))

function fatorialFuncao(numero){
    if(numero == 0 || numero == 1){
        return 1
    }else{
        return numero * fatorialFuncao(numero - 1)
    }
}

if(Number.isInteger(numero) == false || numero < 0){
    console.log("O número digitado é inválido.")
}else{
    console.log("O fatorial de " + numero + " é: " + fatorialFuncao(numero))
}