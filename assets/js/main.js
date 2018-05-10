
function changeBackground(num) {
    var path = '../assets/images/bg' + num + '.jpg';
    document.body.style.backgroundImage="url('" + path + "')";
}

// initialize
var old = "";
var neew = "";
var operator = "";
window.onload = clctr;
function clctr() {
    old = document.getElementById("ans").value;
}

//check current value
function curr() {
    alert(old);
}

// C button
function clearScreen() { // C
    old = "";
    document.getElementById("ans").value = old;
}

// <- button
function backSpace() {
    old = old.substr(0, old.length - 1);
    document.getElementById("ans").value = old;
}

// 0 button
function addZero() {
    old += "0";
    document.getElementById("ans").value = old;
}

// 1 button
function addOne() {
    old += "1";
    document.getElementById("ans").value = old;
}

// = button
function answer() {
    switch(operator) {
        case "+":
        old = ( parseInt(neew) + parseInt(old) ).toString();
        document.getElementById("ans").value = old
        break;

        default:
        document.getElementById("ans").value = old
    }
    
}

// + button
function add() {
    neew = old;
    old = "";
    operator = "+";
    document.getElementById("ans").value = old;
}


