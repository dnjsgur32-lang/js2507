let myBtn = document.getElementById("myBtn")
let result = document.getElementById("result")
let myBtn2 = document.getElementById("myBtn2")
let result2 = document.getElementById("result2")

// function displaydate() {
//     result.innerHTML = Date()
// }
//case1 이벤트리스너가 클릭 이벤트를 듣고 있다가,
// // 이벤트가 발생하면 displayDate 함수를 실행한다.
// myBtn.addEventListener("click", displaydate)

//case2 이벤트리스너가 클릭이벤트를 듣고 있다가,
// 이벤트가 발생하면 익명함수를 즉시 실행한다.
// myBtn.addEventListener("click", function() {
//   alert("Hello World!")
// })

//case3 이벤트리스너가 클릭이벤트를 듣고 있다가,
// 이벤트가 발생하면 흐름의 순서대로 함수를 실행시킨다.
// function myFunction(){
//     alert("Hello world")
// }

// function someotherFunction(){
//     alert("This function was also executed!")
// }
// myBtn.addEventListener("click", myFunction)
// myBtn.addEventListener("click", someotherFunction) 


// case4 오버, 아웃 클릭이벤트를 리스너에 등록

function myMOver() {
    result2.innerHTML = "마우스 오버1"
}
function myMClick() {
    result2.innerHTML = "마우스 클릭2"
}
function muMOUT() {
    result2.innerHTML = "마우스 아웃3"
}

myBtn2.addEventListener("mouseover", myMOver)
myBtn2.addEventListener("click", myMClick)
myBtn2.addEventListener("mouseout", muMOUT)
