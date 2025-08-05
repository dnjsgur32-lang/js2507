// let result = document.getElementById("result")

// window.addEventListener("resize", function(){
//   document.getElementById("result").innerHTML = Math.random();
// });

// let result = document.getElementById("result")
// let p1 = 5;
// let p2 = 7;

// document.getElementById("myBtn").addEventListener("click", function() {
//   myFunction(p1, p2);
// });

// function myFunction(a, b) {
//   document.getElementById("result").innerHTML = a * b;
// }

let myP1 = document.getElementById("myP1")
let myDiv1 = document.getElementById("myDiv1")
let myP2 = document.getElementById("myP2")
let myDiv2 = document.getElementById("myDiv2")

document.getElementById("myP1").addEventListener("click", function() {
    alert("you clicked the white element!")
}, false)

document.getElementById("myDiv1").addEventListener("click", function() {
    alert("you clicked the orange element!")
}, false)

document.getElementById("myP2").addEventListener("click", function() {
    alert("you clicked the white element!")
}, true)

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("you clicked the orange element!")
}, true)