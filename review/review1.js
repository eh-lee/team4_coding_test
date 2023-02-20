//-------------------------230218 review-----------------------------
//복습

                //1번
                //다중 for문 연습


//1
//double for statement
//n=5 3
function doubleFor(){

}


//2
//triple for statement
//n= 5 3 1
function tripleFor(){

}



                //16번
                //split('seperator', Number(limit) )
                //match
                //RegExp
                //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
                //https://poiemaweb.com/js-regexp

//1 
//split('seperator');

// split() 메서드는 리터럴리 분열시키는 거야
// 분열시켜서 배열로 만들어
// 그럼 그 분열시키는 기준점이 필요하겠지? 그게 바로 seperator라는 이름의 매개변수가 됨니다
// ex)
let s = "hi, one, two";
s.split(',');
console.log(s.split(',')); //> ['hi', ' one', ' two']
//','라는 세퍼레이터를 기준으로 찢어. 세퍼레이터를 제거한 값을 배열의 각 인덱스에 넣어주는 결과가 나오쥬

let s2 = "안녕하세요a저는a이은형a입니다!"
console.log(s2.split('a')); //>  ['안녕하세요', '저는', '이은형', '입니다!']

let s3 = "pPoopt";
console.log(s3.split('p')); //> ['', 'Poo', 't']
//시작 인덱스면 vacant string으로 처리하네

let sExamp = '';
console.log(sExamp); //> 


//2
//split('seperator', limit);

//split('s', num)  //>split()의 첫 번째 매개변수는 세퍼레이터였쥬
                   //> 두 번째 매개변수는 limit 입니다. Number(limit)

let s4 = "1,12,123,1234"
console.log(s4.split(',',3)); //['1', '12', '123']
console.log(s4.split(',',2)); //['1', '12']
console.log(s4.split(',',1)); //['1']
console.log(s4.split(',',s4.split(',').length)); // ['1', '12', '123', '1234']
console.log(s4.split(',',s4.split(',').length-1)); //['1', '12', '123']
console.log(s4.split(',',s4.split(',').length-2)); //['1', '12']
console.log(s4.split(',',s4.split(',').length-3)); //['1']
console.log(s4.split(',',s4.split(',').length-4)); //[]

//즉 limit seperator는 반환될 인덱스의 갯수 ([0, 1, 2].len === [1, 2, 3].len)





//4 RegExp
//정규표현식(Regular Expression)은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용한다.
//정규표현식은 리터럴 표기법으로 생성 ex) /regexr/i ~ /패턴/플래그
//아 16번 match RefExp로 풀면 더 직관적이겠다!


let names = 'LEH ; KEY ; CSY ; YJH';
var filter = /\s*(?:;|$)\s*/; //' ' && ; 
var nameList = names.split(filter);
console.log(nameList); //['LEH', 'KEY', 'CSY', 'YJH']


const targetStr1 = 'This is a pen.';
const regexr1 = /is/ig;

// RegExp 객체의 메소드
console.log(regexr1.exec(targetStr1)); // [ 'is', index: 2, input: 'This is a pen.' ]
console.log(regexr1.test(targetStr1)); // true

// String 객체의 메소드
console.log(targetStr1.match(regexr1)); // [ 'is', 'is' ]
console.log(targetStr1.replace(regexr1, 'IS')); // ThIS IS a pen.
// String.prototype.search는 검색된 문자열의 첫번째 인덱스를 반환한다.
console.log(targetStr1.search(regexr1)); // 2 ← index
console.log(targetStr1.split(regexr1));  // [ 'Th', ' ', ' a pen.' ]



const targetStr2 = 'Is this all there is?';

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.
let regexr2 = /is/;

console.log(targetStr2.match(regexr2)); // [ 'is', index: 5, input: 'Is this all there is?' ]

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.
regexr2 = /is/ig;
//g ~ global

methodSth('sth', limit);

console.log(targetStr2.match(regexr2)); // [ 'Is', 'is', 'is' ]
console.log(targetStr2.match(regexr2).length); // 3



//ex) 16번

function solution(str){
    if (str.match(/p/gi).length == str.match(/y/gi).length ? answer = true : answer = false);
    return answer;
}