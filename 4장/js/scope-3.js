// var hi = "hello"; // 전역 변수

// function change() {
//     hi = "bye"; // 함수 안에서 전역변수 값 수정가능.
// }

// console.log(hi); // hello 출력
// change(); // 함수호출
// console.log(hi); // bye 출력

var hi = "hello"; // 전역 변수

function change() {
    var hi = "bye"; // 지역 변수. 이 함수 에서만 사용 가능.
}

console.log(hi); // hello 출력
change(); // 함수호출
console.log(hi); // hello 출력