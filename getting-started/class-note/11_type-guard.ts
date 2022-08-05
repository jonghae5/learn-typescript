interface Developer {
    name: string;
    skill : string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making'};
}

var tony = introduce();
console.log(tony.name)

// 타입 단언 이용
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill); 
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}


// function is해당

// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}
export {}