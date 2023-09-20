const factor = 5; // 변수 선언 및 생성.

function calc(){
    return num * factor; // 오류 발생 밑은 변수는 지역변수이기때문에 사용할수없음.
}

{
    // 블럭안에서 선언된 const 와 let 은 지역변수이기 때문에 위의 calc 함수에서 불러오지못한다.
    const num = 10; 
    let result = calc(); // 함수 호출.
    console.log(`result : ${result}`);
}