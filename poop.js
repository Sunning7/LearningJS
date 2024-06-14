/*let x=3.14
//x = Math.round(x);
//x = Math.floor(x);
//x= Math.ceil(x);
//x = Math.pow(x,2);
x = Math.sqrt(x)

console.log(x); 
let a;
let b;
let c;

/* a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b= Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C:", c) 

document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextInput").value;
    a = Number(a);

    b = document.getElementById("bTextInput").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
    count-= 1;
    document.getElementById("countLbl").innerHTML = count;

}

document.getElementById("increaseBtn").onclick = function () {
    count+= 1;
    document.getElementById("countLbl").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function () {
    count= 0;
    document.getElementById("countLbl").innerHTML = "0";
}
*/


let x;
let y;
let z;



document.getElementById("rollButton").onclick = function () {
    let x = Math.floor(Math.random() * 20) + 1;
    let y = Math.floor(Math.random() * 20) + 1;
    let z = Math.floor(Math.random() * 20) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}


