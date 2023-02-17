//https://school.programmers.co.kr/learn/courses/30/lessons/12931
//자릿수 더하기


// let n = 234;
// let nStr = (n).toString();
// console.log(nStr);
// let nArr = nStr.split("");
// console.log(nArr); 
// // console.log(Number(nSpl));
// let answer = 0;



// for (let i = 0; i<nArr.length; i++){
//     answer += Number(nArr[i]);
//     console.log(answer);
//     // console.log(typeof(answer));
    
// }

//안 더해지는 원인 : console.log(typeof(nSpl[0])); //> string
// Number(nSpl[i]) 하면 끝.



//최종

function solution(n){
    let answer = 0;
    let nStr = (n).toString();
    let nArr = nStr.split("");
    
    for (let i = 0; i<nArr.length; i++){
        answer += Number(nArr[i]);
    }
    return answer;
}