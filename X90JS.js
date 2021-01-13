// JavaScript For Project no. 89 // 

function addUser() {
    localStorage.setItem("p1n", document.getElementById("player1_name_input").value);
    localStorage.setItem("p2n", document.getElementById("player2_name_input").value)

    location = "X89B.html";
}
let p1n = localStorage.getItem("p1n");
console.log("f ~ file: X89B.js ~ line 9 ~  p1n ", p1n);
let p2n = localStorage.getItem("p2n");
console.log("F ~ file: X89B.js ~ line 11 ~ p2n", p2n);

let p1s = 0;

let p2s = 0;

document.getElementById("p1n").innerHTML = p1n;

document.getElementById("p2n").innerHTML = p2n;

document.getElementById("qt").innerHTML = "Questrion turn : " + p1n;

document.getElementById("at").innerHTML = "Answer turn : " + p2n;

document.getElementById("p1s").innerHTML = p1s;


document.getElementById("p2s").innerHTML = p2s;

function send() {
    gw = document.getElementById("n1").value;

    ge = document.getElementById("n2").value;

    word = gw + "×" + ge;

    let a = parseInt(gw) * parseInt(ge);
    let number1 = document.getElementById("n1").value;
    console.log("F ~ file: X89.js ~ line 38 ~ send ~ check_button", number1);
    let number2 = document.getElementById("n2").value;
    console.log("F ~ file: X89.js ~ line 40 ~ send ~ check_button", number2);

    qw = "<h4 id='word_display'> Q. " + number1 + "×" + number2 + "</h4>";

    console.log("F ~ file: X89B.js ~ line 59 ~ send ~ question_word", qw);

    ib = "<br>Answer : <input type='text' id='input_check_box'>";

    console.log("F ~ file: X89B.js ~ line 61 ~ send ~ input_box", ib);

    cb = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    console.log("F ~ file: X89.js ~ line 63 ~ send ~ check_button", cb);

    row = qw + ib + cb;

    console.log("F ~ file: X89B.js ~ line 65 ~ send ~ row", row);


}
qt = "pl1"

let at = "pl2"

function check() {
    let ga = document.getElementById("input_check_box").value;

    console.log("F ~ file: X89B.js ~ line 82 ~ check ~ ga", ga);

    let a = ga.toLowerCase();

    console.log("F ~ file: X89B.js ~ line 86 ~ check ~  a", a);
    ans = number1 * number2;

    if (word == ans) {
        if (at == pl1) {
            p1s = p1s + 1;
            console.log("F ~ file: X89B.js ~ line 92 ~ check ~ p1s", p1s);
            document.getElementById("p1s").innerHTML = p1s;
        } else {
            p2s = p2s + 1;
            console.log("F ~ file: X89B.js ~ line 96 ~ check ~ p2s", p2s);
            document.getElementById("p1s").innerHTML = p2s;
        }
    }

    if (qt == "pl1") {
        qt = "pl2";
        console.log("F ~ file: X89B.js ~ line 103 ~ check ~ qt", qt);
        document.getElementById("qt").innerHTML = "Question Turn " + pl2;
    } else {
        qt = "pl1";
        console.log("F ~ file: X89B.js ~ line 107 ~ check ~ qt", qt);
        document.getElementById("qt").innerHTML = "Question Turn " + pl1;
    }

    if (at == "pl1") {
        at = "pl2";
        console.log("F ~ file: X89B.js ~ line 113 ~ check ~ at", at);
        document.getElementById("at").innerHTML = "Question Turn " + pl2;
    } else {
        at = "pl1";
        console.log("F ~ file: X89B.js ~ line 117 ~ check ~ at", at);
        document.getElementById("at").innerHTML = "Question Turn " + pl1;
    }

    document.getElementById("output").innerHTML = "";
}
