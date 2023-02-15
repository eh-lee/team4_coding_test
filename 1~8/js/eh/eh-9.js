//https://school.programmers.co.kr/learn/courses/30/lessons/12948
//핸드폰 번호 가리기


//idea
//string을 배열로 split해서 저장하는 문제네유
//그런데 조건이 뒷 네 자리 제외니까
//split해서
//렝스에서 -5? 해서 포문 돌리고 포문 프로퍼티는 인덱스 값 새로 선언하는 변수 할당하면 끝?


//1
//.split() 메서드 연습
// let phone_number = "01092980200";
// let answer = 0;

// let arr1 = phone_number.split();
// console.log(arr1); // > ['01092980200']

// let arr2 = phone_number.split("");
// console.log(arr2); // >  ['0', '1', '0', '9', '2', '9', '8', '0', '2', '0', '0']



//2
let phone_number = "01092980200";
let answer = 0;

let arr = phone_number.split("");
console.log(arr); // >  ['0', '1', '0', '9', '2', '9', '8', '0', '2', '0', '0']

for(let i = 0; i <= arr.length-5; i++){
    arr[i] = "*"
}
console.log(arr); // >['*', '*', '*', '*', '*', '*', '*', '0', '2', '0', '0']

//그러면 이제 이거를 다시 스트링으로 (배열->스트링)
// arr = arr.toString();
// console.log(arr); //>*,*,*,*,*,*,*,0,2,0,0

// //google: 배열을 하나의 스트링으로 -> replace()
// arr = arr.replace( /,/gi,"");
// console.log(arr); //> *******0200

// 한 번에 정리하면
// arr = arr.toString().replace( /,/gi,"");
// console.log(arr);
// console.log(typeof(phone_number)); //> string
// console.log(typeof(arr)); //> string

//끝



//최종
function solution(phone_number) {
    let answer = 0;
    let arr = phone_number.split("");
    
    for(let i = 0; i <= arr.length-5; i++){
        arr[i] = "*"
    }
    arr = arr.toString().replace( /,/gi,"");
    answer = arr;
    return answer;
}

