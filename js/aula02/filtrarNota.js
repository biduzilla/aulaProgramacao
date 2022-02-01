const alunos = ['joão', 'ana', 'lucas', 'pedro']
const notas = [5, 8, 6, 3, ]

const reprovados = alunos.filter((aluno, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)