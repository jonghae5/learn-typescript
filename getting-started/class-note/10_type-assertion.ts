// 타입 단언 (type assertion)
// 타입스크립트보다 개발자가 더 코드를 잘 이해하고 있다. 
// 내가 타입을 선언한다.
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
// <div id="app">hi</div>

// var div = document.querySelector('div')

// null 일 수 있기 때문에 타입을 보장해주어야 한다.
// if (div) {
//     div.innerText
// }

// var div = document.querySelector('div') as HTMLDivElement;
// div.innerText()

export {}