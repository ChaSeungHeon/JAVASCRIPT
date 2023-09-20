// 1 ~ 전달받은수까지 합계를 계산하는 함수
// 함수 선언.
function calcSum(num){
    let sum = 0;
    for (let i=1;i<=num;i++){
        sum += i;
    }
    alert(`1~10까지의 합은 ${sum}입니다.`);
    document.write(`<h1>1 ~ ${num}까지의 합은 ${sum}입니다.</h1>`);
}   
// 함수 호출.
calcSum(10); // 인수 값을 가지고 호출