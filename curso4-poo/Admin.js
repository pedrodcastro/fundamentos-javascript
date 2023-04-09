import User from "./User.js"

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas) {
    return `Curso de ${nomeCurso} criado com ${vagas} vagas!`
    }
}

const novoAdmin = new Admin('Pedro', 'pedro@gmail.com', '11-08-1999')

// console.log(novoAdmin)
console.log(novoAdmin.criarCurso('desenvolvimento', 50))