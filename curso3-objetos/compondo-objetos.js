const cliente = {
    nome:'Pedro',
    idade:23,
    cpf:'12345678900',
    email:'contatoaugustopedro@email.com',
    fones: ['99995532', '33456678']

}

cliente.dependentes = {
    nome:'Gabi',
    parentesco:'namorada',
    dataNasc:'20/03/1999'
}

console.log(cliente)

cliente.dependentes.nome = 'Gabi Ex'

console.log(cliente)
