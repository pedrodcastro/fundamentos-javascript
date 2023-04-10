import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"


// const novoUser = new User('Mariana', 'm@m.com', '2022-03-05')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Rodrigo', 'r@r,com', '2021-02-02')
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.exibirInfos())

const novoDocente = new Docente('Pedro', 'pedro@email.com', '2023-05-04')
console.log(novoDocente.exibirInfos())
