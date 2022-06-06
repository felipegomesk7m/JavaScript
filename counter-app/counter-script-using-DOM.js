let currentNumberWrapper = document.getElementById('current-number');
let limit = document.getElementById('limit');
var currentNumber = 0;

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        estadoMaiorque10();
        negativeNumber();
    }
} 

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    estadoMaiorque10();
    negativeNumber();
}

function estadoMaiorque10() {
    if (currentNumber >= 10) {
        limit.style.display = "flex";
    } else {
        limit.style.display = "none";
    }
}

function negativeNumber() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "#ff6347";
    } else {
        currentNumberWrapper.style.color = "black";
    }
}