/*let x=3.14
//x = Math.round(x);
//x = Math.floor(x);
//x= Math.ceil(x);
//x = Math.pow(x,2);
x = Math.sqrt(x)

console.log(x); */
let a;
let b;
let c;

/* a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b= Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C:", c) */

document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextInput").value;
    a = Number(a);

    b = document.getElementById("bTextInput").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}



