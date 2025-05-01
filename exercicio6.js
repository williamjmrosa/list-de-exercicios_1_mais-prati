// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")()

console.log("Digite os lados de triângulo: A, B e C")
let ladoA = Number(prompt('Digite o lado A:'))
let ladoB = Number(prompt('Digite o lado B:'))
let ladoC = Number(prompt('Digite o lado C:'))

console.log("Os lados digitados foram: A =", ladoA, ", B =", ladoB, "e C =", ladoC)

if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)){
    console.log("Os lados digitados são inválidos.")
}else if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    console.log("Os lados digitados formam um triângulo.")
    
    if(ladoA  == ladoB && ladoA == ladoC && ladoB == ladoC){
        console.log("Triângulo equilátero.")
    }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        console.log("Triângulo escaleno.")
    }else{
        console.log("Triângulo isosceles.")
    }
}else{
    console.log("Os lados digitados não formam os de um triângulo.")
}