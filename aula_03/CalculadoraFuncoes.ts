import leia from "readline-sync"

let opcao: number
let numero1: number
let numero2: number

do{

console.log("=====================================")
console.log("1 - Soma."                            )
console.log("2 - Subtração."                       )
console.log("3 - Multiplicação."                   )
console.log("1 - Divisão."                         )
console.log("0 - Sair."                            )
console.log("=====================================")

let opcao = leia.questionInt("Digite a operacao: ")

}

while(true)

    if(opcao === 0 ){
        process.exit(0)
    }

    switch(opcao){
        case 1:
            [numero1, numero2] = obterNumeros()
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
        break

        case 2:
            [numero1, numero2] = obterNumeros()
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)  
        break

        case 3:
            [numero1, numero2] = obterNumeros()
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`)
         break

        case 4:
            [numero1, numero2] = obterNumeros()
            console.log(`${numero1} / ${numero2} = ${dividir(numero1, numero2)}`)
            
        break

        default:
            console.log("Operação Inválida!")
            
        break
    }


function obterNumeros(): [number, number]{
    const numero1 = leia.questionFloat("Digite o primeiro numero: ")
    const numero2 = leia.questionFloat("Digire o segundo numero: ")
    return [numero1, numero2]

}


function somar(numero1: number, numero2: number): number {
    return numero1 + numero2
}

function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2
}

function dividir(numero1: number, numero2: number): number {
    return numero1 / numero2
}

function sobre():void{
    console.log("Programa desenvolvido por Sofia.")
}
