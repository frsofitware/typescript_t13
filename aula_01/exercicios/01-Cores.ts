// --- RESOLUÇÃO DO EXERCÍCIO 1. ---

"use strict"

// CHAMANDO A BIBLIOTECA PARA RECEBER INPUT.

import leia = require('readline-sync')

// DEFININDO A ARRAY COMO VAZIA.

let cores: Array<string> = new Array<string>()

// DIAGRAMANDO CABEÇALHO.

console.log("======================================================")
console.log("                 REGISTRO DE CORES                    ")
console.log("======================================================")

// CRIANDO O MEIO DE REGISTRO DE CORES.

for(let indice = 0; indice < 5; indice++){
    cores.push(leia.question(`Insira a ${indice + 1}º cor: `))
}

// DIAGRAMANDO A SAÍDA DE CORES.

console.log("------------------------------------------------------")
console.log("Listar todas as cores: ")

for (let indice = 0; indice < cores.length; indice++) {
    console.log(cores[indice]);
}
console.log("------------------------------------------------------")

// USANDO SORT PARA TER A SAÍDA ALFABÉTICA.

cores.sort((a, b) => a.localeCompare(b));

// DIAGRAMANDO A SAÍDA DE CORES EM ORDEM ALFABÉTICA.

console.log("Ordenar as cores: ")
for (let indiceOrdem = 0; indiceOrdem < cores.length; indiceOrdem++) {
    console.log(cores[indiceOrdem]);
}
console.log("------------------------------------------------------")