
// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// 10 + '10' = 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// };

// 타입 추론 기본 3

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    tag: K;
    description: string;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'aaa',
    value : 'a',
    tag: 'a'
}

// Best Common Type 가장 적절한 타입
let arr = [0, 1 , true, 'a']; // union 타입으로 구성해나간다.


export {}