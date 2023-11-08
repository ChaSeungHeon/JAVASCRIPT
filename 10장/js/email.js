const email = document.querySelector("#userEmail"); // 메일 주소 입력 부분
const button = document.querySelector("button"); // 버튼
const result = document.querySelector("#result"); // 결과 표시 영역

// button.addEventListener("click",function(){
//     let username, domain;

//     if(email.value !== "") {
//         username = email.value.split("@")[0]; // @기준으로 앞부분
//         username = username.substring(0, 3); // username 중 세 자리만 필요합니다.
//         domain = email.value.split("@")[1]; // @ 기준으로 뒷부분
//         result.innerText = `${username}...@${domain}`; // 결과를 표시합니다.
//         email.value = ""; // 텍스트 필드를 지웁니다.
//     }
// });

button.addEventListener("click", function(){
    let username, domain, half;

    if(email.value !== ""){
        username = email.value.split("@")[0]; // @ 기준으로 앞부분
        half = username.length / 2; // username의 길이를 절반으로 나눕니다.
        username = username.substring(0,(username.length - half)); // username에서 절반으로 나눈 위치 까지만 추출합니다.
        domain = email.value.split("@")[1] // @ 기준으로 뒷부분
        result.innerText = `${username}...@${domain}`; // 결과를 표시합니다.
        email.value = ""; // 텍스트 필드를 지웁니다.
    }
});