// --- RESOLUÇÃO DO EXERCÍCIO 2. ---

// IMPORTANDO O READLINE-SYNC E A FUNÇÃO STACK.

import leia from "readline-sync"
import { Stack } from "../conceituacao_aula02/Stack"

// DEFININDO A STACK QUE IRÁ RECEBER OS VALORES.

const pilhaLivros = new Stack<string>()

// LAÇO DE REPETIÇÃO PARA O MENU & OPÇÕES.

while(true){ 

// DIAGRAMANDO O CABEÇALHO.

    console.log("======================================================")
    console.log("                   PILHA DE LIVROS                    ")
    console.log("======================================================")

// MENU DE OPÇÕES ESTILIZADO.

    console.log("\n****************************************************")
    console.log("1 - Adicionar Livro a Pilha.")
    console.log("2 - Listar todos os Livros.")
    console.log("3 - Retirar Livro da Pilha.")
    console.log("0 - Sair")
    console.log("****************************************************")

// ENTRADA DA OPÇÃO DESEJADA.

    const opcao = leia.questionInt("Entre com a opcao desejada: ")

// SE A OPÇÃO = 0, O PROGRAMA ENCERRA.

    if(opcao === 0){
        console.log("------------------------------------------------------")
        console.log("Programa Finalizado!")
        console.log("======================================================")
        break
    }

    switch(opcao){

// SE OPCAO = 1, É ABERTO O INPUT PARA REGISTRO DO NOME DO LIVRO.

        case 1:
            const nome = leia.question("Digite o nome: ")
            if (nome.trim()!== ""){
            pilhaLivros.push(nome)
            console.log("------------------------------------------------------")
            console.log("Lista de livros na pilha: ")
            pilhaLivros.printStack()
            console.log("------------------------------------------------------")
            console.log("Livro Adicionado!")
            console.log("======================================================")
            }
            else{
                console.log("------------------------------------------------------")
                console.log("Nome Inválido! Tente novamente.")
                console.log("======================================================")
                
            }
            break

// SE OPCAO = 2, É LISTADO O NOME DOS LIVROS REGISTRADOS NA PILHA.

        case 2:
            if(pilhaLivros.isEmpty()){
                console.log("------------------------------------------------------")
                console.log("A Pilha de livros está vazia.")
                console.log("======================================================")
            }
            else{
                console.log("------------------------------------------------------")
                console.log("Lista de Livros na pilha: ")
                pilhaLivros.printStack()
                console.log("======================================================")
            }
            break

// SE OPCAO = 3, É REMOVIDO O ÚLTIMO LIVRO DA PILHA.

        case 3:
            if(pilhaLivros.isEmpty()){
                console.log("------------------------------------------------------")
                console.log("A pilha de livros está vazia!")
                console.log("======================================================")
            }
            else{
                console.log("------------------------------------------------------")
                pilhaLivros.pop()
                console.log("Pilha de livros: ")
                pilhaLivros.printStack()
                console.log("------------------------------------------------------")
                console.log("Um Livro foi retirado da pilha!")
                console.log("======================================================")
            }
            break
    }
    
// MANTENDO O LOOP DO PROGRAMA ATÉ SER ENCERRADO.

    leia.keyInPause("Pressione qualquer tecla para continuar...")
}