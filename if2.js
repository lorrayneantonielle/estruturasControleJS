function teste1(num) {
    if(num > 7)
        console.log(num) // JS não é baseado em identação
        // por isso, apenas a primeira linha depois do if é considerada parte dele
        // para  considerar mais linhas, é necessário usar {}
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)

// nesse  caso ele imprimi o 6 e o 8 pq o ; termina 
// a sentença de codigo vazia
// e o console.log não está dentro do bloco por causa do ;
//CUIDADO COM O ; não usar com as estruturas de controle


function teste2(num) {
    if(num > 7) {
        console.log(num)
    }
}

teste2(6)
teste2(8)