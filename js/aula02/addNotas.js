let soma;
let media;

const notas = [10, 6 , 8];
notas.push(7);

soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}

media = soma/notas.length;
console.log(notas)
console.log(media)

notas.pop();

soma = 0;
for (let i = 0; i < notas.length; i++){
    console.log(`numero: ${notas[i]}`);
    soma += notas[i]
}

media = soma / notas.length;
console.log(notas)
console.log(media)