// 함수는 ‘레시피’와 같습니다.
// **레시피(함수)**를 만들어 두면,
// **재료(매개변수)**만 다르게 제공해서 여러 가지 요리를 할 수 있습니다.
// **결과(반환값)**는 요기가 완성된 음식이라 생각하시면 됩니다.

// ----------------함수 연습하기-------------------

const sayHello = function(name){
    return"안녕하세요,"+ name +"님!";
}

console.log(sayHello("철수"))

// ---------------------------------------------------

const add =(a,b) =>{
    return a+b
}

const plus = (a,b)=>a+b

console.log(add(3,5))
console.log(plus(10,9))

// ---------------------------------------------------

function multiply(x,y){
    return x*y
}
console.log(multiply(2,3))

// ---------------------------------------------------

function sayHi1(){
    return "안녕하세요~~^^"
}
console.log(sayHi1)

function sayHi2(){
    return "안녕하세요~~^^"
}
console.log(sayHi2())

// ---------------------------------------------------

function printMessage(msg) { //return이 없으면 자동으로 undefined를 반환합니다.
    console.log(msg)
}
printMessage("반갑습니다.") // "반갑습니다." 출력, 반환값 없음

// ---------------------------------------------------

function repeat(n, action){
    for(let i=0;i<n;i++){
        action(i)
    }
}
repeat(3,function(i){console.log(i);})

// -------------익명함수, 화살표함수--------------------

const hello=()=>{
    return"안녕하세요";
}
console.log(hello());

setTimeout(()=>{
    console.log("3초 뒤에 이 메시지가 나옵니다.");
},3000)
// -----------------기본값 매개변수--------------------

function greet(name="손님"){
    return name+"님, 안녕하세요!";
}
console.log(greet());
console.log(greet("지영"));

// 함수를 선언하고, 호출하는 법을 이해하세요.
// 매개변수와 반환값, 화살표 함수, 함수 표현식 등 다양한 형태를 연습해보세요.
// 함수는 다른 함수에 인자로 전달할 수 있고(콜백), return 없이도 동작시킬 수 있습니다.
