const alunos = ['joão', 'ana', 'lucas', 'pedro']
const medias = [5, 8, 6, 3, 5]

let ListaDeNotasAlunos = [alunos, medias]

const exibeNomeNota = (nomeAluno) => {
    if(ListaDeNotasAlunos[0].includes(nomeAluno)){
        indice = ListaDeNotasAlunos[0].indexOf(nomeAluno);
        return ListaDeNotasAlunos[0][indice] + ', sua média é ' + ListaDeNotasAlunos[1][indice];
    } else {
        return 'Aluno não cadastrado';
    }
}

console.log(exibeNomeNota("pedro"))