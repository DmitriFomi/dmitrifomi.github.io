console.log("From File");

// Comments
/*
    Comments
    Comments
*/

// Variables / Muutujad


let name1 = "Dima";      // Type - String ehk Tekst
let year = 2025;        // Type - Integer / Int ehk number
let balance = 10.44;    // Type - Float / Double ehk ujuvkomaga number
let male = true;        // Type - Boolean / Bool (True / False) ehk jah / ei väärtus (1 / 0)
const pi = 3.14;

console.log(name1);
console.log(year);

name1 = "Juku";
console.log(name1);

//pi = 3.15;

console.log(name1 + year);
console.log(name1 + balance);
console.log(balance + year);
console.log(name1 + " was born in " + year);

/*
    ()
    *
    /
    +
    -
*/

console.log(1 + 2 * (3 + 3));
console.log(name1 + (balance + pi));

let student1 = "Dima";
let student2 = "Juku";
let student3 = "Mari";

// Array / List - Masiiv
// ["Dima", "Juku", "Mari"]
// [0, 1, 2]

let students = ["Dima"];
console.log(students);
//students = ["Juku"];
students.push("Juku");
students.push("Mari");
console.log(students);
students.splice(1, 1);
console.log(students);
students[1] = "Jaanus";
console.log(students);

students.push("Juku");
students.push("Mari2");
students.push("Mari3");
students.push("Mari4");


// IF / ELSE - Kas / või - Küsimuse küsimine arvuti käest
/*
    Logical operators / loogilised võrrandid
    == - Võrdne
    > - Suurem
    < - Väiksem
    >= - Suurem või Võrdne
    <= - Väiksem või Võrdne
    ! - Ei
    != - Ei ole võrdne

    && - AND ehk ja
    || - OR - või
*/

if(student1 == "Dima") {
    // TRUE - JAH
    console.log("Jah see on Dima");
} else {
    // FLASE - EI
    console.log("Ei ole Dima");
}

if(male) {
    console.log("Jah on mees");
} else {
    console.log("Ei ole mees");
}

// 1 ja 1 - 1
// 1 ja 0 - 0
// 1 või 0 - 1
if(student1 == "Dima" && pi == 3.14) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
/*
    AND
    00 - 0
    01 - 0
    10 - 0
    11 - 1

    OR
    00 - 0
    01 - 1
    10 - 1
    11 - 1


    01111 - AND 0
    01111 - OR  1

    (0 || 1) && (1 || 1) && 0
    1 && 1 && 0 - 0

    (0 || 1) && (1 || 1) || 0
    1 && 1 || 0
    1 || 0 - 1


    64bit - 0000000000000000000000000000000000000000000000000000000000000000
    0000000000000000000000000000000000000000000000000000000000000000 - 0
    0000000000000000000000000000000000000000000000000000000000000001 - 1
    0000000000000000000000000000000000000000000000000000000000000010 - 2
    0000000000000000000000000000000000000000000000000000000000001010 - 10
    0000000000000000000000000000000000000000000000000000000001101101 - m
    32bit - 00000000000000000000000000000000

    00 - 0 -> 2 bit 0 - 3
    01 - 1
    10 - 2
    11 - 3
    1010 - 10
    1011 - 11
    1100 - 12
    1101 - 13
    1110 - 14
    1111 - 15 -> 4 bit 0 - 15

*/

let maxInt = Number.MAX_VALUE;
console.log(maxInt);
maxInt = maxInt * 10;
console.log(maxInt);

// Kaa dima on koolis ja kas ta hilines
// Jah (1) && Ei (0) -> Ei 0

let student1Present = true;
let student1Delayed = false;

if(student1Present && student1Delayed) {
    console.log("Sinu hinne on 1");
}

// switch

if(year == 2025) {
    console.log("yes it is 2025");
} else if(year == 2026) {
    console.log("yes it is 2026");
}  else {
    console.log("Don't know the year");
}

switch(year) {
    case 2025:
        console.log("yes it is 2025");
        break;
    case 2026:
        console.log("yes it is 2026");
        break;
    default:
        console.log("Don't know the year");
        break;
}

// FOR / WHILE

console.log(students);
console.log(students[0]);
console.log(students[1]);

console.log("----------------");

/* 
    1. i -> Index ehk Start -> let i = 0
    2. Logic operator ehk kui kaia me seda teeme -> students.length
    3. iteration addition ehk lähme 1 koht edasi ->  i++
    4. Code

    i = 0; 0 < 6; 1 -> 0 < 6 - True
    i = 1; 1 < 6; 2 -> 1 < 6 - True
    i = 2; 2 < 6; 3 -> 2 < 6 - True
    ......
    i = 5; 5 < 6; 6 -> 5 < 6 - True
    i = 6; 6 < 6; 7 -> 6 < 6 - False
*/

for(let i = 0; i < students.length; i++) {
    if(i == 2) {
        continue;   
    }
    console.log(students[i]);
}

let counter = 0;

while(counter <= 10) {
    console.log(counter);
    counter++;
}

counter = 0;
console.log("----------------");

while(true) {
    if(counter == 5) {
        counter++;
        continue;
    }
    console.log(counter);
    if(counter >= 10) {
        break;
    }
    counter++;
}

/*while(true) {
    console.log("Infinite LOOP");
}*/


let number1 = 0; // 0
number1 = number1 + 1; // 1
number1 += 1; // 2
number1++; // 3

let studentsMarks = [5, 5, 4, 4, 4, 3];

// Object - JSON

let dima = {
    "Name": "Dima",
    "Mark": 5,
    "Home": "Tallinn",
    "Year": 2
};

console.log(dima);
console.log(dima.Name);
console.log(dima.Home);

let studentsJSON = [];
studentsJSON.push({
    "Name": "Dima",
    "Subjects": [
        {
            "Name": "Math",
            "Grade": 5
        },
        {
            "Name": "PE",
            "Grade": 5
        },
        {
            "Name": "Language",
            "Grade": 5
        }
    ],
    "Home": "Tallinn",
    "Year": 2
});
studentsJSON.push({
    "Name": "Juku",
    "Subjects": [
        {
            "Name": "Math",
            "Grade": 4
        },
        {
            "Name": "PE",
            "Grade": 4
        },
        {
            "Name": "Language",
            "Grade": 4
        }
    ],
    "Home": "Tallinn",
    "Year": 1
});
studentsJSON.push({
    "Name": "Mari",
    "Subjects": [
        {
            "Name": "Math",
            "Grade": 5
        },
        {
            "Name": "PE",
            "Grade": 4
        },
        {
            "Name": "Language",
            "Grade": 3
        }
    ],
    "Home": "Tartu",
    "Year": 2
});

console.log(studentsJSON);
for(let i = 0; i < studentsJSON.length; i++) {
    console.log("Name: " + studentsJSON[i].Name);
    let avg = 0; // Summa kõikidest hinnetest / kogusega
    for(let j = 0; j < studentsJSON[i].Subjects.length; j++) {
        avg += studentsJSON[i].Subjects[j].Grade;
    }
    avg = avg / studentsJSON[i].Subjects.length;
    console.log("AVG: " + avg);
}

studentsJSON[0].Year++;

console.log(studentsJSON);
