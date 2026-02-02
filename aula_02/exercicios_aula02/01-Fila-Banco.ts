// --- RESOLUÇÃO DO EXERCÍCIO 1. ---

// IMPORTANDO O READLINE-SYNC E A FUNÇÃO QUEUE.

import leia from "readline-sync"
import { Queue } from "../conceituacao_aula02/Queue"

// DEFININDO A QUEUE QUE IRÁ RECEBER OS VALORES.

const filaBanco = new Queue<string>()

// LAÇO DE REPETIÇÃO PARA O MENU & OPÇÕES.

while (true) {
    
// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("                  AGÊNCIA BANCÁRIA                    ")
console.log("======================================================")

// MENU DE OPÇÕES ESTILIZADO.

    console.log("******************************************************")
    console.log("1 - Adicionar Cliente na Fila")
    console.log("2 - Listar todos os Clientes")
    console.log("3 - Retirar Cliente da Fila")
    console.log("0 - Sair")
    console.log("******************************************************")


// ENTRADA DA OPÇÃO DESEJADA.

    const opcao = leia.questionInt("Entre com a opcao desejada: ")


// SE A OPÇÃO = 0, O PROGRAMA ENCERRA.

    if (opcao === 0) {
        console.log("------------------------------------------------------")
        console.log("Programa Finalizado!")
        console.log("======================================================")
        break
    }

// ESTRUTURA SWITCH PARA ATRELAR AÇÕES.

    switch (opcao) {

// SE OPCAO = 1, É ABERTO O INPUT PARA REGISTRO DO NOME.

        case 1: 
            const nome = leia.question("Digite o nome: ")
            if (nome.trim() !== "") {
                filaBanco.enqueue(nome)
                console.log("------------------------------------------------------")
                console.log("Lista: ")
                filaBanco.printQueue()
                console.log("------------------------------------------------------")
                console.log("Cliente Adicionado!")
                console.log("======================================================")
            } else {
                console.log("------------------------------------------------------")
                console.log("Nome Inválido!")
                console.log("======================================================")
            }
            break


// SE OPCAO = 2, É LISTADO O NOME DE QUEM ESTÁ NA FILA.

        case 2: 
            if (filaBanco.isEmpty()) {
                console.log("------------------------------------------------------")
                console.log("A fila está vazia.")
                console.log("======================================================")
            } else {
                console.log("------------------------------------------------------")
                console.log("Lista de Clientes na Fila: ")
                filaBanco.printQueue()
                console.log("======================================================")
            }
            break

// SE OPCAO = 3, É REMOVIDO O PRIMEIRO DA FILA.

        case 3: 
            if (filaBanco.isEmpty()) {
                console.log("------------------------------------------------------")
                console.log("A fila está vazia!")
                console.log("======================================================")
            } else {
                console.log("------------------------------------------------------")
                filaBanco.dequeue()
                console.log("Fila: ")
                filaBanco.printQueue()
                console.log("------------------------------------------------------")
                console.log(`O Cliente foi chamado!`)
                console.log("======================================================")
            }
            break


// SE OPCAO NÃO ENTRA NO INTERVALO DE 0 A 3, A MENSAGEM DE "OPÇÃO INVÁLIDA" É EXIBIDA.

        default:
            console.log("Opção inválida! Escolha entre 0 e 3.")
            console.log("======================================================")
    }

// MANTENDO O LOOP DO PROGRAMA ATÉ SER ENCERRADO.

    leia.keyInPause("Pressione qualquer tecla para continuar...")
}