const cliente = {
    nome:'Pedro',
    idade:23,
    cpf:'12345678900',
    email:'contatoaugustopedro@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))