//parâmetros de função
function nomeFuncao(parametro1, parametro2, etc) {

}
             //parametros 1 e 2
function soma(x, y) {
    return x + y;
}

function multiplica(x = 1, y = 1) {
    return x * y;
}
                      //argumentos 1 e 2
console.log(multiplica(soma(4, 5)));

//parâmetros x argumentos

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`
}

// console.log(nomeIdade('Pedro', 23))