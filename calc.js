
console.log("");
console.log("welcome");


function add(num1,num2){
    return num1 + num2;
}

function multipy(num1,num2){
    return num1 * num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function divide(num1,num2){
    return num1 / num2;
}


function calculate(num1, num2, operator){

    if(operator == "+"){
        let result = add(num1,num2);
        console.log(`The addition of ${num1} and ${num2} = ${result}`);
    }
    else if(operator == "-"){
        let result = subtract(num1,num2);
        console.log(`The Subtraction of ${num2} from ${num1} = ${result}`);
    }

    else if(operator == "*"){
        let result = multipy(num1,num2);
        console.log(`The Multiplication of ${num1} and ${num2} = ${result}`);
    }

    else if(operator == "/"){
        let result = divide(num1,num2);
        console.log(`The Division of ${num1} by ${num2} = ${result}`);
    }

    else {
        console.log("Insert one of this operators [+,-,*,/] as the third argument");
    }

    
}

console.log("");
let calculator = calculate(2,4,"*");
console.log("");