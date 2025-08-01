// 함수선언

function multiply(x,y){
    return x*y;
}

let result1 = multiply(4,6);
console.log(result1);

// 함수 표현식

const sayGoodbye = function(name){
    return name+"님, 안녕히 가세요."
}

console.log(sayGoodbye("은지"))

// 화살표 함수

const divide = (a,b) =>{
    return a/b
}

console.log(divide(30,6))

// 기본값 매개변수

function greet(name="이름없음"){
    return name + "님, 반갑습니다!"
}

console.log(greet())
console.log(greet("민수"))

// 나머지 매개변수

function sumAll(...nums){
    return nums.reduce((acc,cur) => acc +cur,0)
}

console.log(sumAll(1,2,3,4,5))

// 익명 함수와 콜백 함수

setTimeout(function(){
    console.log("2초 뒤에 실행됩니다.")
},2000)

// 함수 호출과 함수 자체

function sayHello() {
    return"안녕하세요!"
}

console.log(sayHello) // 함수 자체가 출력
console.log(sayHello()) // 함수를 실행한 결과가 출력