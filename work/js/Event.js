let resultTime = document.getElementById("resultTime")
let myBtn = document.getElementById("myBtn")
let resultBtn = document.getElementById("resultBtn")
let resultCookie = document.getElementById("resultCookie")
let toUpperCase = document.getElementById("toUpperCase")


// 매개값으로 넘어온 this 를 사용하기
function Ooops(id) {
    id.innerHTML = 'Ooops!!!'
}

function displayDate() {
    resultTime.innerHTML = Date()
}

// 속성값을 전달하므로 () 생략
myBtn.onclick = displayDate

// 페이지가 로드될 때
// onload onunload 사용하여 쿠키를 처리
function checkCookies() {
    let text =""
    if (navigator. cookieEnabled == true){
        text = "Cookies are enabled."
    } else {
        text = "Cookies are not enabled."
    }
    
}