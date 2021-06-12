const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break 
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4: // não é possível usar um intervalo entre um case e outro tipo: 6-4
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: // atenção à sintaxe
            console.log('Reprovado')
            break // se não usar o break ele vai executar todos os cases
        default:
            console.log('Nota inválida') // não precisa colocar o default no final. Mas se colocar em outro lugar tem que usar o break
    }
    console.log('Fim')
}



imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)