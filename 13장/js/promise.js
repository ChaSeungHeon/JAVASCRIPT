// Promise 객체 만들기 (제작 코드)
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
    if(likePizza) {
        resolve(`피자를 주문합니다.`); // <=== True 이면 resolve에 저장
    }
    else {
        reject(`피자를 주문하지 않습니다.`); // <=== False 이면 reject에 저장
    }
});

// Promise 객체 사용하기 (소비코드)
pizza
    .then(
        result => console.log(result)
    )
    .catch(
        err => console.log(err)
    )
    .finally(
        () => console.log("완료")
    ); // 마지막에 세미콜론