function getPara1() {
    input = [];

    for (let index = 0; index <= 6; index++) {
        input.push(document.getElementById("input" + index).value );
    }


    document.getElementById("div1").innerHTML = input.join(". ");
}


function getPara2() {
    input = [];

    for (let index = 0; index <= 6; index++) {
        input.push(document.getElementById("input" + index + ".2").value)
    }


    document.getElementById("div2").innerHTML = input.join(". ");
}