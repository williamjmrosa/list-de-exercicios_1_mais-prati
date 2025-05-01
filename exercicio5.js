// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")()

let peso = Number(prompt('Digite o seu peso (em kg):'))
let altura = Number(prompt('Digite a sua altura (em metros):'))

console.log("O peso digitado foi: ", peso, "kg")
console.log("A altura digitada foi: ", altura, "m")

if(peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)){
    console.log("Os dados digitados são inválidos.")
}else{
    let imc = peso / (altura * altura)
    console.log("O IMC é: ", imc.toFixed(2))

    if(imc < 18.5){
        console.log("Baixo peso.")
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal.")
    }else if(imc >= 25 && imc < 30){
        console.log("Sobrepeso.")
    }else{
        console.log("Obesidade.")
    }
}