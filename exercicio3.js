// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")()

let nota = Number(prompt('Digite a sua nota:'))

console.log("A nota digitada foi: " + nota)

if(nota < 0 || nota > 10 || isNaN(nota)){
    console.log("A nota é inválida.")
}else if(nota >= 6){
    console.log("Aprovado.")
}else{
    console.log("Reprovado.")
}