const cliente = {
    nome:'Pedro',
    idade:23,
    cpf:'12345678900',
    email:'contatoaugustopedro@email.com',
    fones: ['99995532', '33456678'],
    dependentes: [{
        nome: 'Gabi',
        parentesco: 'namorada',
        dataNasc: '20/03/1999'
    }]
}

cliente.dependentes.push({
    nome: 'Ana',
    parentesco: 'namorada',
    dataNasc: '15/05/2000'
})

// console.log(cliente)

const namoradaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '20/03/1999')

console.log(namoradaMaisNova[0].nome)