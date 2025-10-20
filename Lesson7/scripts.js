$(document).ready(function() {
    let para1 = document.getElementById("para1");
    let para2 = document.getElementById("para2");
    console.log(para1);
    console.log(para2);

    para1.innerHTML = "Hello from JavaScript";


    let jClass = document.getElementsByClassName("javaClass");
    console.log(jClass);
    for(let i = 0; i < jClass.length; i++) {
        console.log(jClass[i]);
    }

    /*let day = document.getElementById("day");
    day.innerHTML = "Monday";*/

});

let para1 = document.getElementById("para1");
console.log(para1);

/*
    "" - String pikkus 0
    0
    null - Ei ole teada mis tüüpi muutuja on ja ei ole väärtust
*/


let x = 0; // Global Variable
let operand = "+";
let students = [];

// Function
function Update() {
    let dayInput = document.getElementById("dayInput");
    let day = document.getElementById("day");
    day.innerHTML = dayInput.value;
    console.log(x);
}

function Today() {
    dayInput.value = "Monday";
    Update();
}

function DayUpdated() {
    let updateBtn = document.getElementById("updateBtn");
    /*if(dayInput.value.length == 0) {
        updateBtn.disabled = true;
    } else {
        updateBtn.disabled = false;
    }*/
    updateBtn.disabled = dayInput.value.length == 0;
}

function XChange() {
    document.getElementById("x").innerHTML = document.getElementById("xInput").value;
}

function YChange() {
    document.getElementById("y").innerHTML = document.getElementById("yInput").value;
}

function Calc() {
    let x = document.getElementById("xInput").value; // String
    let y = document.getElementById("yInput").value;
    document.getElementById("total").innerHTML = CalcWithTwoNumbers(parseFloat(x), parseFloat(y));
    /*
        "1" + "1" = "11"
        1 + 1 = 2
    */
}

function CalcWithTwoNumbers(num1, num2) {
    if(operand == "+") {
        return num1 + num2;
    } else if(operand == "-") {
        return num1 - num2;
    } else if(operand == "*") {
        return num1 * num2;
    } else if(operand == "/") {
        return num1 / num2;
    } else if(operand == "%") {
        return num1 % num2;
    }
    /*
        X % 2 = 1 / 0 (Paritu / Paaris)
    */
}

function OperandChange() {
    operand = document.getElementById("operandSelect").value;
    document.getElementById("operand").innerHTML = operand;
}

function SaveCarBrand() {
    let carBrand = document.getElementsByName("carBrand");
    let ouptput = "";
    for(let i = 0; i < carBrand.length; i++) {
        if(carBrand[i].checked) {
            ouptput = carBrand[i].value;
            break;
        }
    }
    document.getElementById("favCarBrand").innerHTML = ouptput;
}

function SaveWorkDays() {
    let workDays = document.getElementsByName("workDaysInput");
    let ouptput = [];
    for(let i = 0; i < workDays.length; i++) {
        if(workDays[i].checked) {
            ouptput.push(workDays[i].value);
        }
    }
    document.getElementById("workDays").innerHTML = ouptput.join(", ");
}

function SaveStudent() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let grade = document.getElementById("grade").value;
    let city = document.getElementById("city").value;

    students.push({
        "FirstName": firstName,
        "LastName": lastName,
        "Grade": grade,
        "City": city
    });

    console.log(students);
}

function StudentCity() {
    let studentName = document.getElementById("studentName").value;
    for(let i = 0; i < students.length; i++) {
        if(students[i].FirstName.includes(studentName) || students[i].LastName.includes(studentName)) {
            document.getElementById("studentFirstName").innerHTML = students[i].FirstName;
            document.getElementById("studentLastName").innerHTML = students[i].LastName;
            document.getElementById("studentCity").innerHTML = students[i].City;
        }
    }
}