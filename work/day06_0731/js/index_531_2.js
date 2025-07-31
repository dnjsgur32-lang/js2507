// 순차적으로 두 수를 입력 받음
// let numberOne = parseInt(prompt("50 미만의 숫자를 입력하세요."));
// let numberTwo = parseInt(prompt("50 미만인 숫자를 입력하세요."));
// OR연산
// if (numberOne < 50 || numberTwo < 50)
//     alert("숫자 2개 중에서 최소한 하나는 50 미만이군요.");
// else
//     alert("숫자 둘 다 10보다 크다.");

let myNumber = parseInt(prompt("50 미만의 숫자를 입력하세요."));

if (!isNaN(myNumber)) {
    alert("유효한 숫자입니다.");
} else {
    alert("숫자가 아닙니다.");
}
