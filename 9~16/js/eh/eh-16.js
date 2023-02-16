//https://school.programmers.co.kr/learn/courses/30/lessons/12916
//문자열 내 p와 y의 개수


////let char = "sth"
//str.match(/char/g);
//result = str.match(/char/gi); // 정규식에 i 플래그가 있으면 대소문자 정규식 개체의 대소문자를 구분하지 않음
//str.split(/char/gi);


//idea
//문자열에서 인덱스 찾기 && 비교하기
//p와 y 갯수 같 트루 틀리면 펄스 ! 삼항 연산자 쓰기
//indexOf('p P y Y) ..

// let s = "pPoooyY"
// let count = 0;
// let char_p = 'p';
// let pos = s.indexOf(char_p);
// console.log(pos); //>0 s문자열의 0번 인덱스에 찾으려는 문자 o가 있다는 뜻.

// while (pos !== -1){ //.indexOf 메서드는 찾으려는 char가 index에 없으면 -1을 반환함.
//     count++
//     pos = s.indexOf(char_p, pos + 1);
// }

// console.log(count); //>1

// console.log(s.indexOf('p')); //>0
// console.log(s.indexOf('P')); //>1
// console.log(s.indexOf('o', 5)); //>2



// 이건 머지?..

// let string = 'pPpppPoop';
// let search = 'p';
// const regexp = new RegExp(search, 'g');
// console.log(string.match(regexp).length); 


// let str = "ppPooppoooPp";

// result = str.match(/p/g);
// console.log(result); //>['p', 'p', 'p', 'p', 'p']
// result = str.match(/p/g).length;
// console.log(result); //>5
// result = str.match(/p/gi);
// console.log(result); //>['p', 'p', 'P', 'p', 'p', 'P', 'p']
// result = str.match(/p/gi).length; 
// console.log(result); //>7
// result = str.match(/k/gi);
// console.log(result); //없는 경우 null

// 그러면 

// let str = "pPooyy"; //>true
// let str = "kkk" //>false
// console.log(str.match(/g/gi));

// if (str.match(/p/gi) || (str.match(/y/gi) )=== null){
//     answer = false
//     }



let str = "ktekekktkekkk"
console.log(str.split(/k/gi)); //>['', '', 'eete'] // 찾은 값을 공백으로 전환하고 나머지를 하나의 인덱스에 묶음
console.log(str.split(/k/gi).length); //>3

console.log(str.match(/k/gi)); //>2 ['k', 'k'] 
console.log(str.match(/k/gi).length); //>2

// if (str.split(/p/gi).length === str.split(/y/gi).length ? answer = true : answer = false);
// console.log(answer);

// // // if (str.match(/p/gi) && str.match(/y/gi) === null){
// // //     answer = false
// // // }
// // // console.log(answer);

//문제점 .match 메서드로 하면 없는 문자열을 찾으려고 할 때 length가 null이라 뭔가 안 되네..
//if문 때리지 말고 바로 return해도 될 듯한데


//최종

function solution(s){
    return s.split(/p/gi).length - 1 == s.split(/y/gi).length - 1;
}
