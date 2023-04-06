const clientes = [
  {
    nome: "Pedro",
    cpf: "12345678900",
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
  },
  {
    nome: "Jorge",
    cpf: "09876543211",
    dependentes: [
      {
        nome: "Anabel",
        parentesco: "mãe",
        dataNasc: "20/03/1999",
      },
      {
        nome: "Claudio",
        parentesco: "pai",
        dataNasc: "15/05/2000",
      },
    ],
  },
];

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; //Esse operador ... espalha os elementos do objeto e vai colocando no array

console.table(listaDependentes) //bem interessante, verificar mais sobre