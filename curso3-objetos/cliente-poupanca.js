function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup

}

const pedro = new clientePoupanca('Pedro', '12345678900', 'pedro@gmail.com', 100, 500);

console.log(pedro)

clientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

pedro.depositarPoup(1000)

console.log(pedro.saldoPoup)