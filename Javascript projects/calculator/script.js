let numbres = document.querySelectorAll('.numbre');
let operations = document.querySelectorAll('.operation');
let display = document.querySelector('.display');
let calcul = document.querySelector('.calcul');
let operatorSelected = false;
let operator

numbres.forEach((numbre) => {
    numbre.addEventListener('click', function() {
        display.textContent += numbre.textContent;


    });
});

operations.forEach((operation) => {
    operation.addEventListener('click', function() {
        if (operatorSelected === false) {
            display.textContent += operation.textContent;
            operator = operation.textContent;
            operatorSelected = true;
        }


    });
});

function getNumbres(string, opera) {

    return string.split(opera);
}

calcul.addEventListener('click', function() {

    let info = display.textContent;
    let usedNumbres = getNumbres(info, operator)
    let firstNumbre = Number(usedNumbres[0]);
    let secondNumbre = Number(usedNumbres[1]);
    let result;

    switch (operator) {
        case "+":
            result = firstNumbre + secondNumbre;
            break;
        case "-":
            result = firstNumbre - secondNumbre;
            break;
        case "*":
            result = firstNumbre * secondNumbre;
            break;
        case "/":
            result = firstNumbre / secondNumbre;
            break;
    }

    display.textContent = result;
    operatorSelected = false;



});

document.querySelector(".takeOff").addEventListener("click", function() {
    display.textContent = "";
    operatorSelected = false;
})