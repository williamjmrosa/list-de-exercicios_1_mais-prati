// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let quantidade = Number(prompt('Digite a quantidade de maçãs compradas:'))

console.log("A quantidade de maçãs compradas foi: " + quantidade)

if(quantidade < 12){
    let preco = quantidade * 0.30
    console.log("O valor total da compra é: R$", preco.toFixed(2))
}else{
    let preco = quantidade * 0.25
    console.log("O valor total da compra é: R$", preco.toFixed(2))
}