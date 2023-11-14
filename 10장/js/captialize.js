const string = prompt("영문 소문자로 된 문자열을 입력하세요.");
const firstCh = string[0].toUpperCase(); // 첫번째 글자를 대문자로 만들어서 저장합니다.
const remainStr = string.slice(1); // 두 번째 글자부터 끝까지 추출해서 저장합니다.
const result = firstCh + remainStr; // 첫 번째글자오 추출한 문자열을 연결합니다.
document.write(result);