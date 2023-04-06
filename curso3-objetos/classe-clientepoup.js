class Cliente {
  constructor(nome, email, cpf, saldo) {
    //atributos
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    //comportamento
    this.saldo += valor;
  }

  exibirSaldo() {
    //comportamento
    console.log(this.saldo);
  }
}

class ClientePoup extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const pedro = new ClientePoup('Pedro', 'pedro@gmail.com', '12345678900', 100, 50);

console.table(pedro)

pedro.depositarPoupanca(50)

// console.log(pedro.saldoPoupanca)
