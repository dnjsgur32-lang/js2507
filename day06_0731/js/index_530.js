let usernumber = prompt("숫자를 입력하세요");

if (usernumber === "") {
    alert("공백 입니다.");
} else if (usernumber !== null) {
    // 삼항연산자 _조건_?_참_:_거짓_
      parseInt(usernumber) % 3 === 0 ? alert("3의 배수입니다.") 
    : alert("3의 배수가 아닙니다.");
    // if (parseInt(usernumber) % 3 === 0) {
    //     //참
    //     alert("3의 배수입니다.")
    // } else{alert("3의 배수가 아닙니다.")}


}else {
        alert("입력이 취소됐습니다.")
    }