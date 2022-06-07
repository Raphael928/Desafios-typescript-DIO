// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'John'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'John'
}

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'John';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'John'
}

console.log("Nome Funcionario: " + funcionario.nome);
console.log("Nome funcionario2: " + funcionario2.nome);
console.log("Nome funcionarioObj: " + funcionarioObj.nome);
console.log("Nome funcionarioObj2: " + funcionarioObj.nome);