// 순차적으로 두 수를 입력 받음
let numberOne = parseInt(prompt("50 미만의 숫자를 입력하세요."));
let numberTwo = parseInt(prompt("50 미만인 숫자를 입력하세요."));

if (numberOne < 50 || numberTwo < 50)
//     alert("숫자 2개 중에서 최소한 하나는 50 미만이군요.");
// else
//     alert("숫자 둘 다 10보다 크다.");

// let myNumber = "test"
//not a Number : 숫자가 아님
// is a Not a Number : 숫자가 아니다.
// isNaN(myNumber) : myNumber 숫자가 아니다
// !: 반대로 뒤집기 (숫자가 아닌걸반대로 뒤집어서 숫자로 만듦.)

if (!isNaN(myNumber)) {
    alert("유효한 숫자입니다.");
} else {
    alert("숫자가 아닙니다.");
}
// --------------------------------------------------
// if (!isNaN(myNumber)) {
//     alert("숫자가 아닙니다.");
// } else {
//     alert("유효한 숫자입니다.");
// }