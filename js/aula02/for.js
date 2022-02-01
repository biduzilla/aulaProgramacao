
const lista = [100, 200, 300, 400 , 500, 600]

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

let soma = 0;

lista.forEach(nota => {
    soma += nota
});

let media = soma/lista.length

console.log(media)
