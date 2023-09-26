// 두 수를 전달 받아 곱셈하는 화살표 함수 정의
let sum = (a,b) => {a*b;}
// 두 성수입력 받기
let gop1 = parseInt(prompt("곱할 값을 입력하시오."));
let gop2 = parseInt(prompt("곱할 값을 입력하시오."));

// 결과 화면에 출력하기
document.write(`${gop1}과 ${gop2}을 곱한 결과는 = ${sum(gop1,gop2)}`);