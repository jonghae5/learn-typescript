// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

//TS 숫자
let num: number = 10;

//TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];
let anyItems: any[] = [1, 2, '3'];

// TS 튜플 (배열의 index에 Type이 정의되어 있음)
let address: [string, number] = ['gangnam', 123];

//TS 객체
let obj: object = {};

// let person: object = {
//   name: 'capt',
//   age: 100,
// };

let person: { name: string; age: number } = {
  name: 'capt',
  age: 100,
};

// TS 진위값
let show: boolean = true;



export { address };
