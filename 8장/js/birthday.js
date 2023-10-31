let today = new Date(); // 오늘 날짜
let birthday = new Date("2001-01-21"); // 생일
const result = document.querySelector("#result"); 

// 생일로 부터 오늘까지 흐른 시간 계산
let passtime = today.getTime() - birthday.getTime();
// 밀리초를 일로 변환
let passday = Math.round(passtime / (1000*60*60*24));

// 결과 출력
result.innerText = passday;