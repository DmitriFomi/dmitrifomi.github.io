var counter = 0;

function CounterLogic(action) {
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    // TODO Piirang -5 <= counter >= 5 
    if(action == "-" && counter > min) { // Küsimuse küsimiseks kasutame IF lauset, tagastab Boolean väärtuse
        document.getElementById("counter").innerHTML = --counter;
    } else if(action == "+" && counter < max) {
        document.getElementById("counter").innerHTML = ++counter;
    } else if(action == "r") {
        counter = 0;
        document.getElementById("counter").innerHTML = counter;
        document.getElementById('min').value = "";
        document.getElementById('max').value = "";
    } else if(action == "") {
        document.getElementById("counter").innerHTML = "ERROR";
    }
    CheckCounter();
    /*
        Koodi blokk tähistatakse {......}
        Koodi blokkis tehtud muutujad saame ainult seal kasutada
    */
   /*
    JA - AND - && - Kui üks küsimustes on FALSE siis if lause on FALSE
    VÕI - OR - || - Kui üks küsimustes on TRUE siis if lause on TRUE
    0 - false
    1 - true

    OR
    00 - 0
    01 - 1
    10 - 1
    11 - 1
    000000000000100000 - 1

    AND
    00 - 0
    01 - 0
    10 - 0
    11 - 1
    1111111111111110111111111 - 0

    AND 0010110110 - 000
    OR 111001 - 111

    ! - eitav ehk pöörab ümber meie vastuse
    AND (111)(!0111)!(000) - 000, 1
    (111) - 1
    (!0111) -> 1111 - 1
    !(000) -> !(0) -> 1
    111 - 1 
   */
}


function CheckCounter() {
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    document.getElementById('-').disabled = isNaN(min) || (counter <= min) || min == "";
    document.getElementById('+').disabled = isNaN(max) || (counter >= max) || max == "";
}

document.getElementById("min").addEventListener('input', CheckCounter);
document.getElementById("max").addEventListener('input', CheckCounter);

function AddToDo() {
    var item = document.getElementById('todoItem').value;
    var todoList = document.getElementById('todoList');
    var toDoItems = document.getElementsByClassName("Todo-Item");
    var found = false;
    if(item != "") {
        console.log("Start Loop");
        for(var i = 0; i < toDoItems.length; i++) { // i - index; loogika tehe kui kaua me seda teeme. Array pikkus selleks on .length; i++ suurendame indexit
            // Tsüklli algus
            console.log("In Loop");
            if(toDoItems[i].innerHTML == item) {
                found = true;
                break; // Lõpeta tsükell
            }
            // Tsüklli lõpp
        }
    }
    if(item == "" || found) { // is-invalid
        document.getElementById('todoItem').classList.add("is-invalid");
    } else {
        document.getElementById('todoItem').classList.remove("is-invalid");
        document.getElementById('todoItem').value = "";
        var node = document.createElement('li'); // <li></li>
        node.innerHTML = item;
        node.classList.add("Todo-Item");
        todoList.appendChild(node);
    }
}


function test1() {
    var node1 = document.createElement("div");
    var node2 = document.createElement("p");
    node2.innerHTML = "test para";
    var node3 = document.createElement("h2");
    node3.innerHTML = "Heading";
    node3.classList.add("test1");
    node3.classList.add("test2");
    node1.appendChild(node3);
    node1.appendChild(node2);
    document.getElementById('test').appendChild(node1);
    
    var imageName = GetImage(document.getElementById('myfile').value);
    console.log(imageName);
}

function GetImage(value) {
    return value.substring((value.lastIndexOf("\\") + 1));
}