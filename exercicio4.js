// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

let opcao

do {
    console.log(" _____________________",
              "\n| Escolha uma opção: |",
              "\n| 1 - Opção 1        |",
              "\n| 2 - Opção 2        |",
              "\n| 3 - Opção 3        |",
              "\n| 0 - Sair           |",
              "\n|____________________|")

    opcao = Number(prompt('Digite a opção desejada:'))

    if (opcao == 0) {
        console.log("Saindo do programa.")
    } else {
        verOpcao(opcao)
    }

} while (opcao != 0)

function verOpcao(opcao) {

    switch (opcao) {
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

}