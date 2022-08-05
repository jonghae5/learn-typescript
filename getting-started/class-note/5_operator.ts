// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// function logMessage(value: string | number) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;

function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill : string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person): void {
    // someone.name;
    // someone.skill; // 타입 가드 사용해야함
    // someone.age; // 타입 가드 사용해야함

}

askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

// var capt: string & number & boolean; // never type

function askSomeone2(someone: Developer & Person): void {
    // Developer, Person 2가지 타입을 모두 갖는 타입이 와야한다.
    // someone.name;
    // someone.age;
    // someone.skill;
}

askSomeone2({name: '디벨로퐁', skill: '앱 개발', age: 27});





export {}