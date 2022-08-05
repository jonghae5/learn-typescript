// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10); // 10
// logText('10'); // '10'
// logText(true); // 진위값 true
// logText('하이'); // 문자열 '하이'

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이');



// 1.

// function logText(text:string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }
// logNumber(10);
// logText('하이');


// 2.
// function logText(text: string | number) {
//     console.log(text);
//     // 원하는 함수 메소드를 사용할 수 없다. 교집합 해야 하니까..
//     text.
//     return text;
// }

// logText(10);
// const a = logText('하이');

// 타입 추론이 어렵다. 
// a.split('') 


// 3.  타입 추론이 가능하다.
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// const capt = logText<string>('캡틴');
// capt.split('')
// logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj:Dropdown = {
//     value: 10,
//     selected: true,
// }

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj:Dropdown<number> = {
    value: 10,
    selected: true,
}

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function(text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['abc','def']);

// 제네릭의 타입 제한 - 2 정의된 타입 이용하기 
// interface LengthType {
//     length: number;
// }

// function logTextLength<T extends LengthType>(text: T): T {
//     console.log(text.length);
//     return text;
// }

// logTextLength('a'); // length 를 포함하고 있기 때문
// logTextLength({ length: 10});
// logTextLength({length: '10'}); // length 가 string 이기 때문에 에러


// 제네릭의 타입 제한 - 3 keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// ShoppingItem에 있는 key 중 한가지만 제네릭에 들어간다. >> key값만 사용

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('10');

// control + space 사용
getShoppingItemOption("name");
getShoppingItemOption('stock');

export {}