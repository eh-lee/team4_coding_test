// //https://school.programmers.co.kr/learn/courses/30/lessons/12933
// //정수 내림차순 배치하기
// // parseInt ?

// let n = 12349;
// console.log(typeof(n));
// n = n + "";
// console.log(n);
// console.log(typeof(n));
// let arr = n.split("");
// console.log(arr);
// let str = "";
// let answer = 0;

// arr.sort((a,b) => {
//     return b-a;
// });
// console.log(arr);

// //각 배열의 인덱스를 꺼내서 스트링을 바꾸면 되잖아 ㅇ넘버로

// for(let i = 0; i<arr.length; i++){
//     str += Number(arr[i]);    
// }
// answer = Number(str);
// console.log(answer);
// console.log(typeof(answer));


// function solution(n) {
//     var answer = 0;





//     return answer;
// }



//최종

function solution(n) {
    var answer = 0;
    n = n + "";
    let arr = n.split("");
    let str = "";
    
    arr.sort((a,b) => {
        return b-a;
    });
    
    for(let i = 0; i<arr.length; i++){
        str += Number(arr[i]);    
    }
    return answer = Number(str);
}

