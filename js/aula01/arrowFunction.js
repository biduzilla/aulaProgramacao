
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumeroPequenos = (num1, num2) => {
    if(num1 || num2 > 10) {
        return "somente números entre 0 e 9";
     } else {
        return num1 + num2;
     }
}

console.log(somaNumeroPequenos(1 , 3))