//  
/*

*/


// Muutuja / Variable
let x = 10;
const pi = 3.14;

let word = "String"; // String
let number = 10; // Täis arve / Integer
let floating = 10.10; // Ujuv koma / Float or Double
let choice = false; // jah / ei -> true / false - boolean

console.log(x);
x = 11;
console.log(x);
x = "Tere";
console.log(x);

// Array / loend / massiv / List
let array = ["Dima", "Juku"];
let array2 = [1, 2];



// if statement / või argument
/*
    == if equal - comapre two elements
    > if larger
    < if smaller
    >= if larger or equal 
    <= if smaller or equal 
    ! if not
    != if not equal

    boolean -> true / false
*/
/*
    Diskreetne matemaatika
    00 - 0
    01 - 1
    10 - 2
    11 - 3
    1010 - 10
*/

/*
    If logic
    0 - false
    1 - true
*/
if(1 == 2) {
    // true answer
    console.log("Yes 1 is 1");
} else {
    // false answer
    console.log("Yes 1 is not 1");
}

let time = 10.00;
let sunny = true;
let friends = 4;
let angryParent = true;

// If Time is 12:00 AND it is Sunny AND go out with 5 friends at least, then lets go outm else stay at home
/*
    && - AND / JA
    || - OR / VÕI

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

    10 == 12 -> False / 0
    sunny == true -> true / 1
    0 && 1 -> false / 0

    010 -> 0
    
    010 || 1
    0 || 1 -> 1

    () -> * -> / -> + -> -

    0 && 1 && (0 && 1) -> 0 && 1 && 0 -> 0
    (0 && 1 && 0) || 1 -> 0 || 1 -> 1

*/
if((time == 12.00 && sunny && friends >= 5) || angryParent) {
    console.log("Lets go out");
} else {
    console.log("Lets stay at home");
}

if(number => 0 && number <= 10) {
    console.log("Try again");
    if(number == 5) {
        console.log("You are in the middle");
    }
} else {
    console.log("ERROR");
}

number = 11;

if(number == 10) {
    console.log("This is 10");
} else if(number == 50) {
    console.log("This is 50");
} else if(number == 100) {
    console.log("This is 100");
} else {
    console.log("Number is: " + number);
}

switch(number) {
    case 10:
        console.log("This is 10");
        break;
    case 50:
        console.log("This is 50");
        break;
    case 100:
        console.log("This is 100");
        break;
    default:
        console.log("Number is: " + number);
        break;
}

/*
    1 + 1 = 2
    1 + 1 = 11
*/

console.log("1 + 1 = " + (1 + 1));
console.log("1 + 1 = " + 1 + 1);
console.log("1 + 1 = " + false);

// Array starts at 0
let students = ["Mari", "Juku", "Dima", "Jaauns"];
console.log(students);
students.push("Kaja"); // push -> add new element
console.log(students);
students.splice(2, 1); // splice -> (position, delete count)
console.log(students);
students.sort();
console.log(students);
students.reverse();
console.log(students);

// FOR LOOP - itereerimine
/*
    object.function()
    studnets == Array
    .length -> Array length
    let i = 0;
    i = i + 1;
    i += 1;
    i++;
*/

let j = 0;
console.log(j);
j = j + 1;
console.log(j);
j += 1;
console.log(j);
j++;
console.log(j);

for(i = 0; i < students.length; i++) {
    if(i == 1) {
        continue;
    }
    console.log(students[i]);
}

console.log("---------------");

for(i = (students.length - 1); i >= 0; i--) {
    console.log(students[i]);
}

console.log("-------WHILE 1--------");
// WHILE - do until 
let counter = 0;
while(counter < students.length) {
    console.log(students[counter]);
    counter++;
}

console.log("--------WHILE 2-------");
counter = 0;
while(true) {
    console.log(students[counter]);
    counter++;
    if(counter >= students.length) {
        break;
    }
}