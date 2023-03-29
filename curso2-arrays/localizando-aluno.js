const alunos = ['João', 'Juliana', 'Casio', 'Ana'];

const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

//include() --> Retorna um true ou false, pois verifica se o parametro está no Array

const exibeNomeNota = (nomeDoAluno) => { //function arrow
    if (listaDeNotasEAlunos [0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos [0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é: ' + listaDeNotasEAlunos [1][indice];

    } else {
        return 'Aluno não está cadastrado :(';
    }
}

console.log(exibeNomeNota('Pedro'))

function exibeNota (nome) { //function declarada
    if (alunos.includes(nome)) {
        let indice = alunos.indexOf(nome);
        return `${nome}, sua média é: ${mediaDosAlunos[indice]}`;
    } else {
        return 'Aluno não está cadastrado :(';
    }
}

console.log(exibeNota('João'))