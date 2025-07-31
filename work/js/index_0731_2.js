let userNumber = parseInt(prompt("몇 까지 3의 배수를 찾을까요???", "100"))
let count = 0;

if (userNumber !== null) {
    for (let i = 1; i <= userNumber; i++) {
        if (i % 3 === 0) {
            count++;
            document.writeln(`${i}`);
        }
    }
    document.writeln(`<p>${userNumber}까지 3의 배수의 갯수 : ${count}</p>`);
}