// let x = '';
// console.log(x)
// x = 'oi';

// DECLARAÇÃO DE FUNÇÃO

// (1) Declara a função e diz o que ela faz
function imprimeTexto(texto) {
    console.log(texto);
}

// (2) Executa a função (1 ou + vezes)
// imprimeTexto('Oi');
// imprimeTexto('outro texto');

// três formas diferentes de escrever funções

function soma() {
    // outros códigos
    return 2 + 2; // precisa ser a última linha da função
}

imprimeTexto(soma());