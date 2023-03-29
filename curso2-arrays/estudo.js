const arrayNums = [1, 2, 3, 4]


function multiplicaPorDez(element) { //Bom para reutilzar o código em mais partes, porém nem sempre é necessário;
    return element * 10;
}

const arrayMultiplicado = arrayNums.map(multiplicaPorDez)

// const arrayMultiplicado = arrayNums.map(element => element * 10);

console.log(arrayMultiplicado);