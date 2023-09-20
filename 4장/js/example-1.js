// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수

function gop(num1,num2){
    return num1*num2; // 곱을 리턴해준다.
}

cnum1 = parseInt(prompt("정수 하나를 입력해주십시오.")); // 정수 하나를 입력
cnum2 = parseInt(prompt("정수 하나를 입력해주십시오.")); // 정수 하나를 입력
document.write(`<h1>${cnum1}부터 ${cnum2}의 곱의 결과는 ${gop(cnum1,cnum2)}</h1>`); // 곱의 결과를 창에 출력