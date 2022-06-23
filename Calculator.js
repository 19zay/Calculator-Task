
// document.write()


let  num1 = parseFloat(prompt("Enter a number"));
let calculate = (prompt("Enter operator ( either +,-,*or / )"));
let num2 = parseFloat(prompt("Enter a Another Number"));
let result = ('${num1} ${calculate} ${num2}');

var head
head = ('<H1>A Simple Calculator')
document.write(head)

if(isNaN(num1) || isNaN(num2) || isNaN(calculate)){
    alert('Incorrect input, refresh.')
}
else{
    if(calculate == "+"){
        result = num1 + num2;
    }
    else if(calculate == "*"){
        result = num1 * num2;
    }

    else if(calculate == "-"){
        result = num1 - num2;
    }
    else if(calculate == "/"){
        result = num1 / num2;
    }
}

alert(`${num1+  ' ' + ' ' +calculate + ' ' + ' ' + num2} = ${result}`);