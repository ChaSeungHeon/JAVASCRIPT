
// 버튼의 요소 가져오기
const btn = document.querySelector("button");
/*
// display() 함수 정리
function display() {
    alert ("버튼을 클릭했습니다.");
}

// 버튼을 클릭하면 display() 함수 실행.
btn.addEventListener("click", display); // 괄호 열고 닫고가 없다. */

btn.addEventListener("click",() => {
    alert("버튼 클릭!");
})