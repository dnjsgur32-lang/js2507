// p529

let usernumber = prompt('숫자를 입력하세요.')

// if(조건)
// else if(또 다른 조건)
// else (기타)

if (usernumber === "") 
    alert("데이터를 입력하세요.")

if (usernumber !== null) {
    if (parseInt(usernumber) % 3 === 0) {
        alert("3의 배수입니다.")
    } else {
        alert("3의 배수가 아닙니다.")
    }
} else {
    alert("입력이 취소됐습니다.")
    alert ("뺌")
}