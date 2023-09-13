// 1. 정수를 입력 받는다. (정수로 변환)
// 2. 만약 정수가 3의 배수 이면
//      1) 3의 배수입니다. 출력
// 3. 아니면
//      1) 3의 배수가 아닙니다. 출력

    let threenum = parseInt(prompt("정수를 입력하십시오."));

    if (threenum % 3 == 0){ 
        alert(`${threenum}은 3의 배수 입니다.`);
        document.write(`${threenum}은 3의 배수 입니다.`);
    }
    else {
        alert(`${threenum}은 3의 배수가 아닙니다.`);
        document.write(`${threenum}은 3의 배수가 아닙니다.`);
    }   