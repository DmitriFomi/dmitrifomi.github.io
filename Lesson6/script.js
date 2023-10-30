// Üks rida komentaar
/*
    Mitut rida
    Komentaari
*/

// Muutujad ehk Variables
/* 
    5 + 6 = 11
    x + 6 = 11
    x = 5
*/ 

document.getElementById("varX").innerHTML = 5;
document.getElementById("varX2").innerHTML = 4;
let numSum = 0; // Globaalne muutuja
let counter = 0;
let sum = 0;
// Funktsioon - Koodi blokk mida käivitatakse siis kui on vaja
// function nimetus()
function Sum2Numbers() {
    var x = parseFloat(document.getElementById("formX").value); // Lokaalne muutuja 
    let y = parseFloat(document.getElementById("formY").value);
    let action = document.getElementById("formA").value;
    const pi = 3.14;
    document.getElementById("numx").innerHTML = x;
    document.getElementById("numy").innerHTML = y;
    document.getElementById("numa").innerHTML = action;
    // If on küsimuste esitamine programmile
    if(action == "+") {
        // Kui küsimus on tõene siis teeme seda
        numSum = x + y;
        document.getElementById("numSum").innerHTML = numSum;
    } else if(action == "-") {
        numSum = x - y;
        document.getElementById("numSum").innerHTML = numSum;
    } else if(action == "*") {
        numSum = x * y;
        document.getElementById("numSum").innerHTML = numSum;
    } else if(action == "/") {
        numSum = x / y;
        document.getElementById("numSum").innerHTML = numSum;
    } else {
        // Kui küsimus on väär siis teeme seda
        document.getElementById("numSum").innerHTML = "ERROR";
    }   
    
    /*switch (action) {
        case "+":
            document.getElementById("numSum").innerHTML = x + y;
            break;
        case "-":
            document.getElementById("numSum").innerHTML = x - y;
            break;
        case "*":
            document.getElementById("numSum").innerHTML = x * y;
            break;
        case "/":
            document.getElementById("numSum").innerHTML = x / y;
            break;
        default:
            document.getElementById("numSum").innerHTML = "ERROR";
            break;
    }*/
}

function GuessNum() {
    let guessedNumber = parseFloat(document.getElementById("formG").value);
    let sumEl = document.getElementById("numSum");
    if(numSum == guessedNumber) {
        sumEl.style.color = "#00ff39";
    } else if(guessedNumber > numSum) {
        document.getElementById("test").innerHTML = "Arv on liiga suur";
    } else if (guessedNumber < numSum) {
        document.getElementById("test").innerHTML = "Arv on liiga väike";
    } else {
        sumEl.style.color = "red";
    }
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("counterProgress").style.width = (counter * 25) + "%";
    // Kui on katsete arv 2 või suurem ja arvatud arv on väiksem kui tegelik arv muudame värvi
    if(counter >= 2 && guessedNumber < numSum) {
        document.getElementById("counterProgress").style.backgroundColor = "yellow";
    } else {
        document.getElementById("counterProgress").style.backgroundColor = "blue";
    }

    /*
        = tähistab väärtustamist

        Loogilised tehted
        ==  Võrdne
        !=  Ei ole võrdne
        >   Suurem
        >=  Suurem või võirdne
        <   Väiksem
        <=  Väiksem või Võrdne

        Loogika tehted kombineerimine
        && - ja
        || - või

        Kas (X on suurem kui Y) või (X on väiksem kui I)

        if(X > Y || X < I || X == A && A > Y)

        (((X > Y || X < I) || X == A) && A > Y)
        (X > Y || X < I) - 1 || 1 -> 1
        ((X > Y || X < I) || X == A) - 1 || 1 -> 1
        (((X > Y || X < I) || X == A) && A > Y) - 1 && 0 -> 0
        1 || 1 || 1 && 0 -> 0

        if(X > Y || X < I || (X == A && A > Y))
        1 || 1 || (1 && 0) -> 1
        1 || 1 || 0 -> 1
        

        0 - false
        1 - true
            &&
        00  0
        01  0
        10  0
        11  1

            ||
        00  0
        01  1
        10  1
        11  1

        0 && 1 && 0 && 1 && 1 -> 0
        0 || 1 || 0 || 1 || 1 -> 1


    */
}

/*
    SQL mingi andmebaas
    SELECT * from products;
*/

//sum2Numbers(); // Kutsume funktsiooni välja
/*
    Variables types:
    String - Tavaline text
    Integer - Täisarv 00000000......0000 - 32 0/1
        01111111111111..111111111 + 10000000000.00000000
    Float/Double - Komaga arv
    Boolean - 1 / 0 - Jah / Ei - True / False
*/

function NewExercise(min, max) {
    // Math.random() -> suvaline number 0 - 1 (0.22145789)
    // 1.2 -> 1 || 1.6 -> 1 - ümardamine
    let random1 = Math.floor(Math.random() * (max - min)) + min;
    let random2 = Math.floor(Math.random() * (max - min)) + min;
    let random3 = Math.floor(Math.random() * 4) + 1;
    // 1 -> 4
    if(random3 == 1) {
        sum = random1 + random2;
        document.getElementById("exercise").innerHTML = random1 + " + " + random2;
    } else if (random3 == 2) {
        sum = random1 - random2;
        document.getElementById("exercise").innerHTML = random1 + " - " + random2;
    } else if (random3 == 3) {
        sum = random1 * random2;
        document.getElementById("exercise").innerHTML = random1 + " * " + random2;
    } else if (random3 == 4) {
        sum = random1 / random2;
        document.getElementById("exercise").innerHTML = random1 + " / " + random2;
    }
}

let counter2 = 0;
function Answer() {
    let exerciseGuess = parseFloat(document.getElementById("exerciseA").value);
    if(sum == exerciseGuess) {
        document.getElementById("exerciseSum").style.color = "green";
    } else {
        document.getElementById("exerciseSum").style.color = "red";
    }
    //counter2 = counter2 + 1;
    counter2++;
    document.getElementById("exerciseSum").innerHTML = exerciseGuess;
    if(counter2 == 3) {
        document.getElementById("btnAnswer").disabled = true;
    }
}