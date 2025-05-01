//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

const prompt = require("prompt-sync")()

let soma = 0
let valor

for(let i = 0; i < 5; i++){
    valor = Number(prompt(`Digite o ${i + 1}º número:`))

    if(!isNaN(valor)){
        soma += valor
    }else{
        console.log("Valor inválido. Digite um número novamente.")
        i--
    }
}

console.log("A soma total dos números digitados é: " + soma)