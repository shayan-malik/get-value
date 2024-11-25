function add(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    document.getElementById("getValue").innerText = (value1 + value2);
}

function subtract(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    document.getElementById("getValue").innerText = (value1 - value2);
}

function multiply(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    document.getElementById("getValue").innerText = (value1 * value2);
}

function division(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    document.getElementById("getValue").innerText = (value1 / value2);
}

