// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")()

let divisor = 0

let media = 0

let soma = 0

let valor

do{
    valor = Number(prompt('Digite um número decimal (0 para sair): '))
    if(valor != 0){
        if(!isNaN(valor) && valor > 0){
            soma += valor
            divisor++
        }else{
            console.log("Valor inválido. Digite um número novamente.")
        }
    }
} while(valor != 0)

media = soma / divisor
console.log("A média aritmética dos números digitados é: " + media)