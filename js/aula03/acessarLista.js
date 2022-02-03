const cliente = {
    nome: "toddy",
    idade: 36,
    cpf: "123456",
    email: "teste@teste.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))