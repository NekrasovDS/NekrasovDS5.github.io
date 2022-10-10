function right()
{ console.log (" ") };

function wrong() 
{ alert("Not found") };

function key()
{ var first = document.getElementById("cost");
var second = document.getElementById("number");
var lt = document.getElementById("outcome");
var last = first.value * second.value;
if (!Number.isNaN(last) && first > 0 && second > 0)
{ lt.value = last;
right(); }
else
{ lt.value = "ERROR"
wrong(); }
}

window.addEventListener ('DOMContentLoaded', function (event) {
console.log("DOM is correct");
let button = document.getElementById("pushbutton");
button.addEventListener('key', key);
})
