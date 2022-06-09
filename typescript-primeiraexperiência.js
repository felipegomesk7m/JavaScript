// TypeScript serve para checagem de tipos e de outras features.

function soma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return console.log(a + b);
    } else {
        console.log(`As variáveis ${a} e/ou ${b} não são do tipo número`);
    }
}

soma(2,3);
soma(5, 'b');
