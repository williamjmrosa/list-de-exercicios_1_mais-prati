// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const prompt = require("prompt-sync")()

let idade = Number(prompt('Digite a sua idade:'))
console.log("A idade digitada foi: " + idade)
if(idade < 0 || Number.isInteger(idade) == false){
    console.log("A idade é Inválida.")
}else if(idade >= 0 && idade <= 12){
    console.log("A pessoa é uma criança.")
}
else if(idade >= 13 && idade <= 17){
    console.log("A pessoa é um adolescente.")
}
else if(idade >= 18 && idade <= 59){
    console.log("A pessoa é um adulto.")
}else{
    console.log("A pessoa é um idoso.")
}