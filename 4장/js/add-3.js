// 1 ~ 전달받은수까지 합계를 계산하는 함수
// 함수 선언.
function calcSum(num){
    let sum = 0;
    for (let i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}   

//사용자로부터 정수 입력 받기
let number = parseInt(prompt("정수 입력(몇까지 더할까요?)"));

// 입력받은수를 함수로 호출
document.write(`<h1>1 ~ ${number}까지의 합은 ${calcSum(number)}입니다.</h1>`);