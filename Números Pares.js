function numerosPares(array) {
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i]);
        } else {
            console.log(`${array[i]} não é um número par`);
        }
    }
    return console.log(arrayPares);
}

array1 = [2,3,4,6,8,10,11];
numerosPares(array1);