// 클래스 생성
class Pet {
    constructor(name,color){
        //프로퍼티 생성
        this.name = name;
        this.color = color;
    }
    //메서드 생성
    run(){
        document.write(`<h2>${this.color} ${this.name}가 달린다</h2>`);
    }
}

class Cat extends Pet{
    constructor(name,color,breed){
        super(name,color); // 상위 클래스의 프로퍼티 재사용
        this.breed = breed; // 새로운 프로퍼티 정의
    }
    // 새로운 메서드 정의
    viewInfo(){
        document.write(`<h2>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}</h2><hr>`);
    }
}

// 객체 생성
const cat2 = new Cat("까비","흰색","먼치킨");
cat2.viewInfo();
cat2.run();