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

// 객체 생성
const pet1 = new Pet("까비","하얀");
pet1.run();