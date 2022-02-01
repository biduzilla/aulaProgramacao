/*
let x = "";
console.log(x)
x = "oi"
*/

function ImprimeText(texto) { 
    console.log(texto);
}

function Soma(num1, num2) {
    return num2 + num1;
}

ImprimeText("oi");
console.log(`A soma dos números é ${Soma(3,1)}`);
ImprimeText(Soma(1,2));
