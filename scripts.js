let resultField = document.getElementById('result');

function appendValue(value) {
    resultField.value += value;
}

function clearScreen() {
    resultField.value = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = 'Error';
    }
    
    if(resultField.value == 4761){
        resultField.value = "tabuka gaya"
    }
}

