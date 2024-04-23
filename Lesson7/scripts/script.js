// Global Variable
let guessedNumber = document.getElementById("guessedNumber");
let answerEl = document.getElementById("answer");
let guessBtn = document.getElementById("guessBtn");
let generatedNumberEl = document.getElementById("generatedNumbers");
let isDiv = false;
let random1 = 0;
let random2 = 0;
let answers = [];

NewGame();

// Functions
function OnSubmit() {
    let userName = document.getElementById("userName").value;
    console.log(userName);
}

function Sum2Numbers(num1, num2) {
    //console.log(`${num1} + ${num2} = ` + (num1 + num2));
    return num1 + num2;
}

Sum2Numbers(1, 1);
Sum2Numbers(5, 6);
Sum2Numbers(7, 10);

function Div2Numbers(num1, num2) {
    return num1 - num2;
}

console.log(`1 - 1 = ` + Div2Numbers(1, 1));
console.log(`5 - 6 = ` + Div2Numbers(5, 6));
console.log(`7 - 10 = ` + Div2Numbers(7, 10));

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Show user new numbers
function NewGame() {
    random1 = GenerateRandomNumber(1, 11);
    random2 = GenerateRandomNumber(1, 11);
    isDiv = GenerateRandomNumber(1, 3) == 1; // Kui on 1 siis tegemist on lahutamisega
    generatedNumberEl.innerHTML = `${random1} ${isDiv ? "-" : "+"} ${random2} `;

    // Reset Style
    guessedNumber.classList.remove("wrong");
    guessedNumber.classList.remove("correct");
    guessedNumber.disabled = false;
    guessedNumber.value = "";
    answerEl.innerHTML = "X";    
}


function GuessNumber() {
    // Local variable is located inside function
    let correctAnsw = isDiv ? Div2Numbers(random1, random2) : Sum2Numbers(random1, random2);
    guessedNumber.disabled = true;
    guessBtn.disabled = true;
    if(guessedNumber.value == correctAnsw) {
        guessedNumber.classList.remove("wrong");
        guessedNumber.classList.add("correct");
        //location.reload();
    } else {
        answerEl.innerHTML = correctAnsw;
        guessedNumber.classList.remove("correct");
        guessedNumber.classList.add("wrong");
    }

    answers.push({
        "PlayerAnswer": guessedNumber.value,
        "IsCorrect": guessedNumber.value == correctAnsw,
        "CorrectAnwer": correctAnsw,
        "Equasion": (generatedNumberEl.innerHTML + "= " + correctAnsw)
    });

    console.log(answers);
}

function guessChanged() {

    if(guessedNumber.value == "") {
        answerEl.innerHTML = "X";
        guessBtn.disabled = true;
    } else {
        answerEl.innerHTML = guessedNumber.value;
        guessBtn.disabled = false;
    }
}

function Restart() {
    NewGame();
}

// TO-DO
/*
    Show if correct or wrong
        Correct - Green
        Wrong - Red
        Input must change color
    Div 2 numbers
        Both sum and div should be
    If Correct Refrersh the page - No good
    Extra button to start again
        Easy - Extra button "Restart"
        Hard - 
    Save progress
        Show to user past answers
    No repeating Equasion
    ....
*/