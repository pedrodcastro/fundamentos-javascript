const user = {
    nome: 'Juliana',
    email: 'juliana@email.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'mariana@email.com',
    role: 'admin',
    criarCurso: function() {
        console.log('Curso Criado!')
    }
}

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()

