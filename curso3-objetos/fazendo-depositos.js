const cliente = {
  nome: "Pedro",
  idade: 23,
  cpf: "12345678900",
  email: "contatoaugustopedro@email.com",
  fones: ["99995532", "33456678"],
  dependentes: [
    {
      nome: "Gabi",
      parentesco: "namorada",
      dataNasc: "20/03/1999",
    },
    {
      nome: "Ana",
      parentesco: "namorada",
      dataNasc: "15/05/2000",
    },
  ],
  saldo: 100,
  depositar: function(valor) {
    this.saldo += valor //this se refere ao objeto que estamos trabalhando
  }
};

console.log(cliente.saldo) //100
cliente.depositar(30)
console.log(cliente.saldo) //130




