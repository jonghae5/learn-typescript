// ES2015 (ES6)

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var capt = new Person('캡틴', 100);
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log("생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho);


// 프로토타입
// var user = { name: 'capt', age:100};
// var admin = { name: 'capt', age:100, role: 'admin'};

// var user = { name: 'capt', age: 100};
// var admin = {};

// admin.__proto__ = user; // 상속
// admin.age
// admin // {} , __proto__ 로 확인
// admin.role = 'admin';
// admin // { role : 'admin' };


// var obj = { a: 10};
// obj.

// var arr = [];
// arr.

