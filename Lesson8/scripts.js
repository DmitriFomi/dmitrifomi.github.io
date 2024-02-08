// Simuleeritud andmebaas, kus on juba 3 õpilast sees
// JSON
let studentsEl = document.getElementById("students");
let students = [
    {
        Id: 0,
        Name: "Dima",
        Grade: 5,
        Age: 28,
        Math: 2,
        Pc: 4
    },
    {
        Id: 1,
        Name: "Juku",
        Grade: 5,
        Age: 27,
        Math: 5,
        Pc: 5
    },
    {
        Id: 2,
        Name: "Mari",
        Grade: 6,
        Age: 20,
        Math: 3,
        Pc: 3
    }
]

function addNewStudent() {
    let studentname = document.getElementById("studentName").value;
    let studentgrade = document.getElementById("studentgrade").value;
    let studentage = document.getElementById("studentage").value;
    let studentmath = document.getElementById("studentmath").value;
    let studentpc = document.getElementById("studentpc").value;

    let newId = -1;
    if (students.length == 0) {
        newId = 0;
    } else {
        newId = parseInt(students[students.length - 1].Id) + 1;
    }
    

    GenerateCard(studentname, studentgrade, studentage, studentmath, studentpc, newId);

    // Save sudent to JSON
    students.push({
        Id: newId,
        Name: studentname,
        Grade: studentgrade,
        Age: studentage,
        Math: studentmath,
        Pc: studentpc
    });


    console.log(students);
}

function clacGPA(grade1, grade2) {
    // Liidame kõik kokku ja jagame teguri arvuga
    return Math.round((parseFloat(grade1) + parseFloat(grade2)) / 2);
}

function GetStudents() {
    for(let i = 0; i < students.length; i++) {
        GenerateCard(students[i].Name, students[i].Grade, students[i].Age, students[i].Math, students[i].Pc, i);
    }
}

function GenerateCard(name, grade, age, math, pc, id) {
        // Teeme uued elemendid
        let cardCont = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardStudentName = document.createElement("h5");
        let cardStudentText = document.createElement("p");
        let deleteStudent = document.createElement("button");


        // Anname neile classid
        cardCont.classList.add("card");
        cardBody.classList.add("card-body");
        cardStudentName.classList.add("card-title");
        cardStudentText.classList.add("card-text");
        deleteStudent.classList.add("btn");
        deleteStudent.classList.add("btn-danger");
        

        // Sisustame elemendid
        cardStudentName.innerHTML = name;
        // `Tere siin on ${studentname}` ==== "Tere siin on" + studentname
        cardStudentText.innerHTML = `Vanus: ${age}<br>
        Klass: ${grade}<br>
        Matemaatika:${math}<br>
        Arvuti: ${pc}<br>
        GPA: ${clacGPA(math, pc)}`;
        deleteStudent.innerHTML = "DELETE";

        // Elementide sidumine
        cardCont.appendChild(cardBody);
        cardBody.appendChild(cardStudentName);
        cardBody.appendChild(cardStudentText);
        cardBody.appendChild(deleteStudent);


        // Lisame talle ID
        cardCont.setAttribute("id", ("student" + id));

        // lisame nuppule onClick
        deleteStudent.onclick = function() {
            DeleteStudent(id);
        };

        studentsEl.appendChild(cardCont);
}

function DeleteStudent(id) {
    let deletePos = -1;
    for(let i = 0; i < students.length; i++) {
        if(students[i].Id == id) {
            deletePos = i;
            break
        }
    }
    students.splice(deletePos, 1);
    document.getElementById("student" + id).remove();

    console.log(students);
}

/*
    Lisada kontroll et kõik väljad oleksid täidetud ehk nupp muutub aktiivseks.
    Midagi küsida
    Mõelda kuidas me saaksime teha TicTacToe mängu
*/
GetStudents();