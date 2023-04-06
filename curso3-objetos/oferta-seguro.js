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
  
  function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj); //cria um array com todas as chaves de um objeto
    if(propsClientes.includes('dependentes')) {
      console.log(`Oferta de seguro de vida para ${obj.nome}!`)
    }
  }

  console.log(Object.values(cliente))
  oferecerSeguro(cliente);