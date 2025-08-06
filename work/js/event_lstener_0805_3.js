let result = document.getElementById("result")
let myDIV = document.getElementById("myDIV")

document.getElementById("myDIV"). addEventListener("mousemove", myfunction)

function myfunction() {
    document.getElementById("result").innerHTML = Math.random()
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myfunction)
}