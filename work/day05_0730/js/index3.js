let myTxt;
let myRandom = Math.random()

console.log(myRandom)
if(myRandom < 0.5){
    myTxt ="0.5 보다 작다."
}else{
    myTxt ="0.5 보다 작지 않다."
}
document.getElementById("result").innerHTML 
= `결과는 ${myTxt}`