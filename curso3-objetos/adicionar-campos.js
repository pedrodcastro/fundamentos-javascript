const cliente = {
    nome:'Pedro',
    idade:23,
    cpf:'12345678900',
    email:'contatoaugustopedro@email.com'
}

console.log(cliente);

cliente.fone = '999189999' //Adicionar uma nova chave que antes não tinha;

console.log(cliente);

cliente.fone = '11112222' //Alterou o valor de uma chave que já havia;

console.log(cliente);