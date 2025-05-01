//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.
const prompt = require("prompt-sync")()

let numero = Number(prompt('Digite um número inteiro:'))

console.log("O número digitado foi: " + numero)

if(Number.isInteger(numero) == false){
    console.log("O número digitado é inválido.")
}else if(numero % 2 == 0){
    console.log("O número é par.")
}else{
    console.log("O número é impar.")
}