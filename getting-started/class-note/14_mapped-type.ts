type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
    Hulk: 33,
    Capt: 25,
    Thor: 64
};

// for in 반복문 코딩
// var arr = ['a','b','c'];
// for (var key in arr) {
//     console.log(key);
// }
export {}