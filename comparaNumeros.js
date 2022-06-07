function comparaNumeros(x, y) {
    let soma = x + y;
    if (x === y) {
        console.log(`Os números ${x} e ${y} são iguais.`);
    } else if (soma > 10 && soma < 20) {
        console.log(`Os números ${x} e ${y} não são iguais. Sua soma é ${soma}, portanto é maior que 10 e menor que 20`);
    } else {
        console.log(`Os números ${x} e ${y} não são iguais.`);
    }
}

comparaNumeros(8,8);