import User from './User.js'

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso ${curso}.`
    }
}