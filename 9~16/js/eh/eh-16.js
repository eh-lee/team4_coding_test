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



// let str = "ktekekktkekkk"
// console.log(str.split(/k/gi)); //>['', '', 'eete'] // 찾은 값을 공백으로 전환하고 나머지를 하나의 인덱스에 묶음
// console.log(str.split(/k/gi).length); //>3

// console.log(str.match(/k/gi)); //>2 ['k', 'k'] 
// console.log(str.match(/k/gi).length); //>2

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
    //split(operator(string), limit)
    // console.log(s.split(/p/gi));
    // console.log(s.split(/y/gi));
    // console.log(s.split(/p/gi).length-1);
    // console.log(s.split(/y/gi).length-1);
    console.log(s.split(/y/gi));
    // console.log(s.match(/y/gi).length);


    return s.split(/p/gi).length - 1 == s.split(/y/gi).length - 1;
    //재혁 님: 오퍼레이터를 기준으로 좌우로 나누는데, 좌우에 글자가 있건 없건(없으면 빈 스트링"")
    //리턴을 하니까, 무조건 기준이 되는 오퍼레이터 글자의 갯수만큼 쉼표가 찍힌다 !

    // length -1 ~ 찾으려는 문자열의 갯수는 렝스-1개니까 !
    //ex) solution("pooY") > ['', 'ooY']  ['poo', ''] | p랑 Y는 하나(1)인데 렝스는 2


    //.split 메서드는 오퍼레이터가 되는 문자열이 없더라도, 없는 것을 기준으로 그대로 배열로
    //반환하기 때문에 min length가 1이다. 그러나
    //.match 메서드는 null이 나온다.
    //그래서 아무리 .match의 len을 받아 와도 null이 출력된다.
    //&& .match 메서드는 boolean이다.
}


// -------------------------------
//230218
//RegExp를 활용해 다른 방식으로 풀기
//에러

// function solution(s){
//     if(s.match(/p/gi).length == s.match(/y/gi).length ? answer = true : answer = false);
//     return answer;
// }



//재혁 님이랑 페어

// function solution(s){
//     var answer = true;
    // console.log(s.match(/p/g).length); // flag g ~ 전역으로 돌린다.
    // console.log(s.match(/y/i).length); // flag i ~ 대소문자를 전부 돌린다.
    // console.log(s.match(/p/gi).length);
    // console.log(s.match(/y/gi).length);
    // console.log(s.match(/p/i).length);
    // console.log(s.match(/y/i).length);
    // if ( s.match(/p/gi).length !== s.match(/y/gi).length ? answer = false : answer = true);

    // console.log(s.match(/y/gi).length);
    // console.log(typeof(length)); //문제: length의 type이 number인데 null 값을 넣어서 에러가 뜸!
// s.match .. length = null -> error
//length 비교는 같은지 아닌지만 비교하는 거지 몇 개의 갯수로 같은지를 비교하는 건 아니잖아요?
// console.log(typeof(null+1)); //> number
// console.log(typeof(null)); //> object

//     if (s.match(/p/ig) && s.match(/y/ig) === null){
//         answer = true;
// //pP yY 둘 다 없는 경우 true ok

// // console.log((s.match(/p/gi).length +1)); // 

//     } else if ( s.match(/p/ig).length +1 === s.match(/y/ig).length +1 ? answer : answer = false);
// //pP yY의 갯수가 같은 경우 true != false
// //length가 null인 경우 처리!

// // console.log(typeof(null+1));
//     return answer;
// }


// console.log(typeof(null+1)); //>number


// function solution(s){
//     var answer = true;

//     if (s.match(/p/ig) && s.match(/y/ig) === null){
//         answer = true;
//     } else if ( s.match(/p/ig).length +1 === s.match(/y/ig).length +1 ? answer : answer = false);
//     return answer;
// }
//RegExp // Regular Expression
//정규표현식
//gi)
//flag 



// function solution(s){
//     var answer = true;
//     var strP = s.match(/p/ig);
//     var strY = s.match(/y/ig);

//     if (strP.length && strY.length === 0){
//         answer = true;
//     }
//     return answer;
// 







//재혁 님 풀이

// function solution(s){
//     var answer = "";
//     var resultP = arr.filter((s === 'p' || 'P') => s.length);
//     var resultY = arr.filter((s === 'y' || 'Y') => s.length);
//     if (resultP.length == resultY.length ||
//     resultP.length && resultY.length === NaN) {
//     answer = true
//     } else false
    
//     return answer;
// }
    



//다시 최종

function solution(s){
    return s.split(/p/gi).length - 1 == s.split(/y/gi).length - 1;
}