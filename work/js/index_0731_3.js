
let userNumber = parseInt(prompt("숫자를 입력하세요."))

if (userNumber !== null) {
    if (userNumber % 4 ===0)
        document.writeln(`${userNumber}는 4의 배수입니다.`)
    else
        document.writeln(`${userNumber}는 4의 배수가 아닙니다.`)
}
else
    alert('입력이 취소됐습니다.')