//정수 제곱근 판별
//https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    var answer = 0;
    
    nSqrt = Math.sqrt(n);
    
    answer = Number.isInteger(nSqrt) === true ? 
        Math.pow(nSqrt+1, 2) : -1;
    
    return answer;
}
// Math.pow = ** 로 표현할 수도 있나봐! 신기해!