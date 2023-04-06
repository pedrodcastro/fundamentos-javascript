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
      this.saldo += valor
    }
  };

  let relatorio = '';

  for(let chave in cliente) {
    if(typeof cliente[chave] === 'object' || typeof cliente[chave] === 'function') {
        continue
    } else {
        relatorio += ` 
        - ${chave}: ${cliente[chave]}`; //está concatenando os valores na variável que deixamos vazia anteriormente
    }
  }

  // console.log(typeof cliente.fones)
  // console.log(typeof cliente.depositar)

  console.log(relatorio)