// One row Comment
/*
    MultyLine Comment
    Test Line 2
*/

/*
    CamelCase
        divTest1
            div test 1
        divTest2
        paraColor
    _
        div_test_1
            div test 1
        div_test_2
        para_color
    
    "test" is not same as "Test"
*/

// Variables ehk Muutujad

var x = "1";
let y = "2";
const pi = "3.14"; // Constant
let studentName2 = "Juku2";
let studentName3 = "Juku3";

/*
int - Integer ehk täis arv 32bit - MAX 2,147,483,647, MIN -2147483647
long - Integer ehk täis arv 64bit - MAX 9,223,372,036,854,775,807
strnig - Text ehk mingi sõnade paarid
boolean - true/ false ehk jah/ei
float - number with decimal ehk arv koos ujuvkomaga 32bit
double - number with decimal ehk arv koos ujuvkomaga 64bit
*/

// let xxxxx = yyyy; x == custom text ehk muutuja nimetus. y == value ehk väärtus
let number1 = 1; // type INT
let word1 = "1"; // type STRING
let bool = true; // type BOOLEAN - TRUE / FALSE ehk 1bit
let number2 = 1.11; // type double

console.log("TEST"); // Print text into Console

let customerName = "Juku";
let customeAge = 26;
console.log(customerName);
console.log(customerName);
console.log(customerName);

customerName = "Dima";
console.log(customerName);
console.log(customerName);
console.log(customerName);

/*
    1 + 1 = 2
    1 + 1 = 11
*/

console.log(1 + 1);
console.log("1" + "1");
console.log("1 + 1 = " + 1 + 1);
// () * / + -
console.log("1 + 1 = " + (1 + 1));
console.log("We have customer " + customerName + " and his age is " + customeAge);

let studentName = "Mari";
let studentMathGade = 5;
let studentLangGade = 4;
let studentPEGade = 3;

console.log("Student " + studentName + "GPA: " + ((studentLangGade + studentMathGade + studentPEGade) / 3));

console.log("PI value: " + pi);
// pi = 3.15; - ERROR

console.log(studentName2);
console.log(studentName3);

// Array / List - masiiv
/*
    Array - fixed length
    List - dynamic length
*/
// NB Array starts with 0
let students = ["Dima", "Juku", "Mari", "Juku2"];
console.log(students);
students.push("Dima2");
console.log(students);
console.log(students[2]); // Index
students.splice(2, 1);
console.log(students);
let jukuPos = students.indexOf("Juku");
console.log(jukuPos);

// JSON - JavaScript Object Notation

let studnet1Obj = {
    "Name": "Dima",
    "Age": 28,
    "City": "Tallinn",
    "IsStudent": true
};



console.log(studnet1Obj);
console.log(studnet1Obj.Name + ", " + studnet1Obj.Age);
console.log(studnet1Obj.Age);

console.log("Your students are: " + students.join(", "));

let finalStudents = [
    {
        "Name": "Dima",
        "Age": 28,
        "City": "Tallinn",
        "IsStudent": true
    },
    {
        "Name": "Juku",
        "Age": 28,
        "City": "Taru",
        "IsStudent": false
    }
];

console.log(finalStudents);

finalStudents.push(
    {
        "Name": "Mari",
        "Age": 25,
        "City": "Tallinn",
        "IsStudent": true
    }
);

console.log(finalStudents);
console.log(finalStudents[0].Name);

let juku = "Juku";

console.log(juku.toLowerCase());
console.log(juku.toUpperCase());

// IF sentence ehk if laused
/*
    boolean - true / false ehk 1 / 0

    Kas juku on sama mis Juku
        0 ehk false
    
    Kas EI ole !
        võrdne !=
    Kas on võrdne ==
        või suurem =>
        või väiksem =<
    Kas on suurem >
    Kas on väiksem <

    OR / VÕI ||
    AND / JA &&

    Kas õpilane1 on Juku JA kas õpilane1 elab Tartus?
    Kas õpilane1 on Juku VÕI kas õpilane1 elab Tartus?

    OR
    00 - 0
    01 - 1
    10 - 1
    11 - 1

    AND
    00 - 0
    01 - 0
    10 - 0
    11 - 1

    OR 0001110010101010 - 1
    AND 0001110010101010 - 0
    (0 || 1) && (1 || 1) || (0 && 0) - 
    1 && 1 || 0
    1 || 0 - 1

    (0 || 0) && (1 || 1) || (0 && 0) - 
    0 && 1 || 0
    0 || 0 - 0
*/

if(juku == "juku") { // TRUE
    console.log("Jah jukud on võrdsed.");
} else { // FALSE
    console.log("Ei leidnud sellist Jukut");
}

let studnet2Obj = {
    "Name": "Juku",
    "Age": 28,
    "City": "Taru",
    "IsStudent": false
};

if(studnet2Obj.Name == "Juku" && studnet2Obj.City == "Tartu") {
    console.log("Jah");
} else {
    console.log("EI");
}

if(1 == 1) {
    console.log("1 == 1");
}

if(1 == 1) {
    console.log("1 === 1");
}

if(1 == "1") {
    console.log("11 == 11");
}

// Kas 1 on võrnde 1 JA kas nad on mõlemad samat tüüpi
if(1 === "1") {
    console.log("11 === 11");
}

let cars = ["BMW", "Audi", "Toyota"];
console.log(cars);

x = 0;
console.log("X: " + x);
x = x + 1;
console.log("X: " + x);
x += 1;
console.log("X: " + x);
x++;
console.log("X: " + x);
console.log("X: " + x++);
console.log("X: " + x);
console.log("X: " + ++x);
console.log("X: " + x);

console.log("----------------");
// FOR / While tsükkel
// i => inteartion, j / k / l
// i < 10, kui kaua see iteratsioon kestab, niikaua kuni vstus on TRUE
// i++ suurendame iteratsiooni 1 võrra
for(let i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log("I: " + i);
}

for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + cars[i]);
}

console.log("----------------");
let a = 0;
while(a < 10) {
    console.log("A: " + a);
    a++;
}
console.log("----------------");

let b = 0;
while(true) {
    console.log("B: " + b);
    b++;
    if(b > 10) {
        break;
    }
}

// Kodune
/*
    Teha JSON kus on auto andmed. Mark, aasta, hind, värv, kas ostetud. Min 5 etinevat autot
    Teha FOR ning tuua välja kõik ühel real kasutades console.log()
    Lisa kui on aega
        Kuvada ainult need mis ei ole ostetud
*/