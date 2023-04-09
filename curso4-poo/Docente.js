import User from './User.js'

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso ${curso}.`
    }
}

const novoDocente = new Docente('Mariana', 'mariana@email.com', '23-04-1993')

console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Jorge', 'JS'))