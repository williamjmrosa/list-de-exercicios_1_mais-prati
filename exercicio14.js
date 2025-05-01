// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")()

let numero = Number(prompt('Digite um número para calcular o fatorial:'))
let fatorial = 1

for (let i = numero; i != 0; i--){
    fatorial = fatorial * i
}

console.log("O fatorial de " + numero + " é: " + fatorial)