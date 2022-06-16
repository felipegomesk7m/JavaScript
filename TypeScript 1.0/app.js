"use strict";
let button = document.getElementById('somar');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let devePrintar = true;
let frase = "O valor é: ";
function somarCampos(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        return console.log(frase + resultado);
    }
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            somarCampos(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    });
}
const funcionarioObj = {};
funcionarioObj.codigo = 1234;
funcionarioObj.name = 'Felipe';
const funcionarioObj2 = {
    codigo: 10,
    name: 'João'
};
