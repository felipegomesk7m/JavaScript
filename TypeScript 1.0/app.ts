let button = document.getElementById('somar') as HTMLButtonElement;
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

let devePrintar = true;
let frase = "O valor é: "

function somarCampos(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2;
    if(devePrintar) {
        return console.log(frase + resultado);
    }
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            somarCampos(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    })
}

// desafio 1

interface funcionario {
    codigo: number,
    name: String
}

const funcionarioObj = {} as funcionario;
funcionarioObj.codigo = 1234;
funcionarioObj.name = 'Felipe';

const funcionarioObj2: funcionario = {
    codigo: 10,
    name: 'João'
}

// desafio 2

interface pessoa {
    nome: String,
    idade: number,
    profissao: String
}