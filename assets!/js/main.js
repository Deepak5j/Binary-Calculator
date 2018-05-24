
function changeBackground(num) {
    var path = 'assets!/images/bg' + num + '.jpg';
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
        old = binaryAddition(neew, old);
        if(isNaN(old)) {
            old = neew;
        }
        old = old.toString();        
        document.getElementById("ans").value = old;        
        break;

        case "-":
        old = binarySubtraction(neew, old);
        if(isNaN(old)) {
            old = neew;
        }
        old = old.toString();        
        document.getElementById("ans").value = old;
        break;

        case "*":
        old = binaryAddition(neew, old);
        if(isNaN(old)) {
            old = neew;
        }
        old = old.toString();        
        document.getElementById("ans").value = old;
        break;

        case "/":
        old = binaryAddition(neew, old);
        if(isNaN(old)) {
            old = neew;
        }
        old = old.toString();        
        document.getElementById("ans").value = old;
        break;

        default:
        operator = "";
        document.getElementById("ans").value = old;
    }
}

// + button
function add() {
    neew = old;
    old = "";
    operator = "+";
    document.getElementById("ans").value = "";
}

// - button
function minus() {
    neew = old;
    old = "";
    operator = "-";
    document.getElementById("ans").value = "";
}

/* binary addition */
function binaryAddition(a, b) {
    let i = a.length - 1; //last index for a
    let j = b.length - 1; //last index for b
    let result  = "";
    let carry   = 0;
    while(i >= 0 && j >= 0) {
        let acur = parseInt(a[i], 10); //a current element
        let bcur = parseInt(b[j], 10); //b current element
        let rcur = (acur + bcur + carry) % 2; //result = acur + bcur + old carry
        carry = parseInt((acur + bcur + carry) / 2); //carry
        result += rcur;
        i--;
        j--;
    }    
    while(i >= 0) {
        let acur = parseInt(a[i], 10);
        let rcur = (acur + carry) % 2;
        carry = parseInt((acur + carry) / 2); 
        result += rcur;
        i--;
    }
    while(j >= 0) {
        let bcur = parseInt(b[j], 10);
        let rcur = (bcur + carry) % 2;
        carry = parseInt((bcur + carry) / 2); 
        result += rcur;
        j--;
    }
    if(carry) {
        result += carry;
    }
    return result.split("").reverse().join("");
}

/* binary Subtraction */
function binarySubtraction(a, b) {
    let i = a.length - 1; //last index for a
    let j = b.length - 1; //last index for b
    
    let result  = "";
    let carry   = 0;

    //loop run up to smaller length among a and b
    while(i >= 0 && j >= 0) {
        let acur = parseInt(a[i], 10); //a current element
        let bcur = parseInt(b[j], 10); //b current element
        let rcur = (acur - bcur + carry) % 2; //result = acur + bcur + old carry
        carry = parseInt((acur - bcur + carry) / 2); //carry
        result += rcur;
        i--;
        j--;
    }    
    //loop run left part of a
    while(i >= 0) {
        let acur = parseInt(a[i], 10);
        let rcur = (acur - carry) % 2;
        carry = parseInt((acur - carry) / 2); 
        result += rcur;
        i--;
    }
    //loop run left part of b
    while(j >= 0) {
        let bcur = parseInt(b[j], 10);
        let rcur = (bcur - carry) % 2;
        carry = parseInt((bcur - carry) / 2); 
        result += rcur;
        j--;
    }
    //if carry is left, or carry not zero
    if(carry) {
        result += carry;
    }
    //reversing the result
    return result.split("").reverse().join("");
}