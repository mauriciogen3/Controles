const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de Honra')
            break
        case 7: case 8: 
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log("recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log("Inválido")
    }
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(06)
imprimirResultado(2)
imprimirResultado(1)
imprimirResultado(-10)