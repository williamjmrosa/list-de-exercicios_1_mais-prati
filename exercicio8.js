// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número:'))

if(num1 < num2){
    console.log("Os números digitados em ordem crescente foram: " + num1 + " e " + num2)
}else if(num1 > num2){
    console.log("Os números digitados em ordem crescente foram: " + num2 + " e " + num1)
}else if(num1 == num2){
    console.log("Os números digitados são iguais.")
}else{
    console.log("Os números digitados foram inválidos.")
}