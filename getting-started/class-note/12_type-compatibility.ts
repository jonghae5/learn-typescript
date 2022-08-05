// 인터페이스
interface Developer {
    name: string;
    skill : string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

// 구조적으로 Developer가 더 크기 때문에, 호환이 되지 않음
// developer = person;

// 구조적으로 developer가 더 작기 때문에 호환이 된다.
// person = developer

// 클래스

class Person {
    name: string;
    // skill: string;
}

// Error
// developer = new Person();


// 함수
// sum 함수가 add 함수보다 구조적으로 더 크다.
var add = function(a: number) {
    // ..
}

var sum = function(a: number, b: number) {
    // ..
}

// Error
// add = sum;

// OK
// sum = add;

// 제네릭

interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// Error
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;

export {}