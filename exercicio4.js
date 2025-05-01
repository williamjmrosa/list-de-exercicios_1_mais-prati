// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

console.log(" _____________________",
            "| Escolha uma opção: |",
            "| 1. Opção 1         |",
            "| 2. Opção 2         |",
            "| 3. Opção 3         |",
            "|____________________|")
let opcao = Number(prompt('Digite a opção desejada:'))

switch(opcao){
    case 1:
        console.log("Você escolheu a opção 1.")
        break
    case 2:
        console.log("Você escolheu a opção 2.")
        break
    case 3:
        console.log("Você escolheu a opção 3.")
        break
    default:
        console.log("Opção inválida.")
}

