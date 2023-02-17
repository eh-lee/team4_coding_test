//https://school.programmers.co.kr/learn/courses/30/lessons/12932
//자연수 뒤집어 배열로 만들기
//어제 배운 sort() return -1 ver.

// let n = 12345;
// let nStr = (n).toString();
// let nArr = nStr.split("");
// console.log(nArr);
// Number(nArr);
// console.log(nArr);

// let answer = [];

// answer = nArr.sort((a,b) => {
//     return -1;
// });

// console.log(answer);


//1차
// 인덱스 밸루가 스트링으로 잡혀 있어서 틀림

// function solution(n) {
//     var answer = [];
//     let nStr = (n).toString();
//     let nArr = nStr.split("");
    
//     answer = nArr.sort((a,b) => {
//         return -1;
//     });
//     return answer;
// }


// 최최종
// 1차 + 각 인덱스를 넘버로 한 다음에 엔서에 푸쉬

// function solution(n) {
//     var answer = [];
//     let nStr = (n).toString();
//     let nArr = nStr.split("");
//     nArr.sort((a,b) => {
//         return -1;
//     });

//     for (let i = 0; i<nArr.length; i++){
//         answer.push(Number(nArr[i]));
//     }
//     return answer;
// }




//이하 배운 것 

let n = 5423;
console.log(typeof(n)); // >number
var answer = [];
n = n + "";
console.log(n);
console.log(typeof(n)); // >string


//배운 것

function solution(n) {
    var answer = [];
    n = n + "";
    for (var i = n.length - 1; i >= 0; i--) {
        answer.push(Number(n[i]));
    }
    return answer;
}
