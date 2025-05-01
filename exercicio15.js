// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibonacci = [0, 1]
let sequência = "0, 1"

for (let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    sequência += ", " + fibonacci[i]
}
console.log("Os primeiros 10 números da sequência de Fibonacci são:", sequência)
