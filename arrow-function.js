function apresentar(nome) {
    return `Olá meu nome é ${nome}`;
}

// console.log(apresentar('Pedro'));

// Arrow function
const apresentarArrow = nome => `Olá meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10) {
        return 'Somente número de 1 a 9'
    } else {
        return num1 + num2;
    }
};

console.log(somaNumerosPequenos(10, 2));