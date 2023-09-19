const student = {
    major : "컴퓨터공학과",
    idNum : 202095092,
    name : '차승헌'
}

for(key in student){
    document.write(`${key} : ${student[key]}<br>`);
}