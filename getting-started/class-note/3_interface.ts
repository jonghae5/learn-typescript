interface User {
    age: number;
    name: string;
}


// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: 'seho',
};

// 함수에 인터페이스 활용 
function getUser(user:User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 20,
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;

sum = function(a: number,b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c']
arr[0]; // 'a'

// arr[0] = 10 // Error > String이라고 정의했기 때문에 >> 딕셔너리 패턴

// 인터페이스 딕셔너리 Dictionary 패턴
interface StringRegetDictionary {
    [key: string]: RegExp,
}

var obj: StringRegetDictionary = {
    // sth: /abc/,
    // cssFile: 'css', >> 에러 
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a' >> 에러 , RegExp 형태로 해라


// 타입 추론 가능 value: String
Object.keys(obj).forEach(function(value) {
})

// 인터페이스 확장
interface Person {
    name: string,
    age: number,
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    language: 'ts',
    name: '캡틴',
    age: 100,
}


export {}
