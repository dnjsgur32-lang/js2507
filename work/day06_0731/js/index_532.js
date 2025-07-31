let numberOne = parseInt(prompt("50미만인 숫자를 입력하세요."));
let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요."));

// v1
// if (numberOne < 50 && numberTwo < 50)
//     alert("숫자 2개 모두 50 미만")
// else
//     alert("조건에 맞지 않는 숫자")

// v2
// 예외처리 포함 : 둘 중에 하나만 숫자가 아니어도 연산하지 않음.
// if (isNaN(numberOne) || isNaN(numberTwo)) {

//     alert("숫자가 아닌값을 비교할 수 없습니다.")
// }
// else {
//     if (numberOne < 50 && numberTwo < 50)
//         alert("2개의 숫자 모두 50 미만")
//     else
//         alert("조건에 맞지 않는 숫자")
// }

// v3
if(!isNaN(numberOne) && !isNaN(numberTwo))
    if (numberOne < 50 && numberTwo < 50)
        alert("2개의 숫자 모두 50미만")
    else
        alert("조건에 맞지 않는 숫자")