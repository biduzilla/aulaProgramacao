//média geral

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    const somaNotas = notasDaSala.reduce((acumulador, atual) =>
    atual + acumulador, 0)
    return somaNotas/notasDaSala.length;
}

console.log(mediaSala(salaPython))
console.log(mediaSala(salaJS))
console.log(mediaSala(salaJava))