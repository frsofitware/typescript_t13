// --- RESOLUÇÃO DO EXERCÍCIO 3. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA RECEBER INPUT.

import leia = require('readline-sync')

// DEFININDO O SET E OS NUMEROS CONTIDOS NELE.

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])

// DIAGRAMANDO O CABEÇALHO.

console.log("======================================================")
console.log("                  BUSCA DE NÚMEROS                    ")
console.log("======================================================")

// INPUT QUE RECEBE O NÚMERO PARA SER BUSCADO.

const numeroBusca = leia.questionInt("Digite o numero que você quer encontrar: ")
console.log("------------------------------------------------------")

// CADEIA DE CONDIÇÕES SE O NÚMERO É ENCONTRADO OU NÃO.

if(numeros.has(numeroBusca)){
    console.log(`O Numero ${numeroBusca} foi encontrado`)
}
else
    {
        console.log(`O Numero ${numeroBusca} nao foi encontrado!`)
    }