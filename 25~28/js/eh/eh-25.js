//https://school.programmers.co.kr/learn/courses/30/lessons/12934
//정수 제곱근 판별

//슈도
//n이 x의 제곱인지
// n=121 11의 제곱이잖아 그때의 
//제곱근 x가 > 0  ?  answer = (x+1)(x+1) : answer = -1

//n = x*x 
// x = n/x

// function solution(n){
//     var answer = 0;
//     let x = n/x;

//     // console.log(x);

//     if (x>0 && x%1===0 ? answer = (x+1)(x+1) : answer = -1); 
//     //x가 정수이려면, x%1==0
// }

//문제 x가 undefined
//해결 Math.sqrt


function solution(n){
    let num = Math.sqrt(n);
    if (num % 1 === 0 ? answer = (num+1)*(num+1) : answer = -1)
    return answer;
}
