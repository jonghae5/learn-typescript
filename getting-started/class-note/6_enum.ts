// enum Shoes {
//     Nike, // 0
//     Adidas, // 1
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 0


enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키


// 예제
// 예외처리에 유용하다!
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer){
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);
// askQuestion('Y'); // 이것도 에러, enum 형태만 가져갈 수 있다.
export {}