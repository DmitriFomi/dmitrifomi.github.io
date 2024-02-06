/*
    Komentaarid
*/

// Komentaarid

// Pridi sisu consooli
console.log("ASDASDAS");

// Muutujad
// var või let või const
/*
    var
        kasutab vat tehnoloogiat ja toetab vanatInternet Explorerit
    let 
        Uuem versioon
    const
        konstantne väärtus, mida ei muudeta
*/

/*
    Muutuja tüübid
        Number - int,float,double,long,byte....
            Täis arvud
                int - 32bit. Max - 2147483647, Min -2147483647
                long - 64bit 
                byte - 8bit. Max 255
            Komaga arvud
                float - 32bit
                double - 64bit
        Text - String,char
            String - suvaline text mida kirjutame "" jutumärgid
            char - suvaline täht ja kirjutame ''
        Jah/ei muutuja - boolean
            boolean - 2bit ehk vöörtused kas 0 või 1
                0 - ei ehk false
                1 - jah ehk true

*/

/*
 Mingi teine programeerimise keel
 int x = 0;
 string y = "Tere";
 double z = 1.5;
*/



var x = 0; // initsialiseerida
let y = 0;
const z = 0;
let name = "Dima";

console.log(x);
console.log(y);
console.log(z);

x = 1;
y = 1;
//z = 1;
console.log("-----------------");
console.log(x);
console.log(y);
console.log(z);

console.log("-----------------");
console.log(1 + 1);
console.log("1" + "1");
console.log("1" + 1);
console.log("1 + 1 = " + (x + y) );

// Tehtede järjestus - () * / + -
console.log("-----------------");
console.log(true);
console.log(false);

// If ehk küsime kas antut tehe on tõene või väär
/*
    Loogilised tehed
    ! - pöörata ümber meie vastuse
    == - kas mõlemad osapooled on võrdsed
        == Kas on võrdsed
        != Kas EI ole võrdsed
    > - kas on suurem
        >= - suurem VÕI võrdne
    < - kas on väiksem
        <= - väiksem VÕI võrdne
    
    Lisa
    || - või
        üks vastustest peab olema Jah 
        00 - 0
        01 - 1
        10 - 1
        11 - 1
    && - ja
        kõik vastusted peavad olema Jah 
        00 - 0
        01 - 0
        10 - 0
        11 - 1
        0000011010101 - 0
        01111111111111111111111111111111111111 - 0

        (1 || 1 || 1) && 0 && (1 && 1) = 0
            1                    1
*/
console.log("Testime");
console.log(1 == 1 || 2 == 2 || 3 == 3 && 1 == 2 && 4 == 4 && 5 == 5);
var test1 = 1 == 2;
if(test1) {
    // Kui vastus on JAH/TRUE
    console.log("Jah 1 == 1");
} else {
    // Kui vastus on EI/FALSE
    console.log("Jah 1 != 1");
}

if("Dima" == "Dima" || "Dima" == "Juku") {
    console.log("Jah Tegemist on Dima-ga");
} else {
    console.log("TEKKIS VIGA Dimaga");
}

if("Mari" == "Mari" && "Mari" == "Juku") {
    console.log("Jah Tegemist on Mari-ga")
} else {
    console.log("TEKKIS VIGA Mariga");
}

console.log("-----------------");
// Advanced
/*
    Loetelu ehk list ehk array
        []
    Objekt - JSON ehk JavaScript Object Notation
        {}
*/

// Kool ja seal on olemas õpilased
let student1 = "Dima";
let student2 = "Juku";
let student3 = "Mari";
let students = ["Dima", "Juku", "Mari"]; // Lugemine hakkab pihta 0
// listi viimane element on listi pikkus - 1 ja listi esimene elment on kogu aeg 0

console.log("Student 1 : " + student1);
console.log("Student 2 : " + student2);
console.log("Student 3 : " + student3);
console.log("All students: " + students[0]);


let student1Age = 28;
let student2Age = 25;
let student3Age = 30;
let studentAges = [28, 25, 30];

let student1GPA = 3;
let student2GPA = 5;
let student3GPA = 4;
let studentGPAs = [3, 5, 4];

let studen1tInfo = {
    name: "Dima",
    age: 28,
    gpa: 3
};

let studen2tInfo = {
    name: "Juku",
    age: 25,
    gpa: 5
};

let studen3tInfo = {
    name: "Mari",
    age: 30,
    gpa: 4
};

console.log(studen1tInfo.age);

// List mis koosneb Objektidest
let allStudentInfo = [
    {
        name: "Dima",
        age: 28,
        gpa: 3
    },
    {
        name: "Juku",
        age: 25,
        gpa: 5
    },
    {
        name: "Mari",
        age: 30,
        gpa: 4
    }
];

console.log(allStudentInfo[0].name);

if(student1 == student2) {
    console.log("S1 == S2");
} else if(student1 == student3) {
    console.log("S1 == S3");
} else if(student1 == student1) {
    console.log("S1 == S1");
} else {
    console.log("FALSE");
}

console.log("---------------");

switch("Juku") {
    case student1:
        console.log("ON S1");
        break;
    case student2:
    case student2:
        // Sama kui me teeksime if(student1 == "Juku" || student1 == "Juku")
        console.log("ON Juku");
        break;
    default:
        console.log("EI leitud");
        break;
}

console.log("---------------");
let i = 2147483647;
console.log(i + 1);
// 1111111111111....111 -> 2147483647 + 1 = 1000000000..0000 -> -2147483647

// LOOP
console.log("---------------");
console.log(students);

// For Each Loop
// i - iteration
// i < 10 - loogika tehe, mõõrab ära iteratsioonide lõppu
/*
    lat arv1 = 1;
        arv1 = arv1 + 1; arv1 = arv1 - 1;
        arv1 += 1; // arv1 -= 1;
        arv1++;
*/
// väljume siis kui vastus on False
for(let i = 1; i <= 10; i++) {
    console.log("I = " + i);
}
console.log("++++++++++");
for(let i = 10; i > 0; i--) {
    console.log("I = " + i);
}

console.log("-------------");
let arv1 = 0;
let arv2 = 0;
console.log("0 + 0 = " + (arv1 + arv2));
console.log("0 + 0 = " + (arv1++ + arv2));
//arv1 = arv1 + 1;
console.log("1 + 0 = " + (arv1 + arv2));
console.log("2 + 0 = " + (++arv1 + arv2));
console.log("3 + 0 = " + ((arv1 + 1) + arv2));
console.log("2 + 0 = " + (arv1 + arv2));

console.log("-------------");

// While loop - ohtlik loop
let j = 0;
// Tee seda nii kaua kuni vastus on TRUE
while(j <= 10) {
    console.log("J = " + j);
    j++;
}
console.log("-------------");
let k = 0;
while(true) {
    console.log("K = " + k);
    if(k >= 10) {
        break;
    }
    k++;
}

console.log("++++++++++");
for(let i = 10; i > 0; i--) {
    if(i == 5) {
        continue;
    }
    console.log("I = " + i);
}


// Funktsioon
function sum2num(num1, num2) {
    console.log(num1 + " + " + num2 + " = " +  + (num1 + num2));
}
console.log("-------------");
sum2num(5, 6);
sum2num(51, 9);
console.log("-------------");
for(let i = 1; i <= 10; i++) {
    let arv1 = 5;
    console.log(arv1 + " + " + i + " = " + (arv1 + i));
}


// teha loop 1 -> 10 mis liidab kokku arv1 + iteratsiooniga. ja printida seda consooli ilusti
// ehk tehe saab konsoolis näha koos vastusega