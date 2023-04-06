function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const pedro = new cliente('pedro', '12345678900', 'contatoaugustopedro@gmail.com', 100);

console.log(pedro)