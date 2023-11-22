const box = document.querySelector("#user-number");
const btn = document.querySelector("button");

btn.addEventListener("click",() => {
    let num = box.value;
    try {
        if (num === "" || isNaN(num)) { // 칸이 비어있거나 또는 숫자가 아니면
          throw "숫자를 입력하세요.";
        }

        num = Number(num);  // n = parseInt(n);
        if (num <= 10) {
          document.querySelector("#result").innerText = num;
        }
        
        if (num > 10) { // 숫자가 10 보다 크다면
          throw "10보다 작은 수를 입력하세요.";
        }    
      } catch (err) {
        alert(err); // throw에서 던진 값이 err에 들어감
      } finally {
        box.value = ""; // 박스 초기화
      }
    });