// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;
    
    let arr = x.toString().split('');
    let sum = 0;
    arr.map((a) => sum += Number(a));
    
    answer = x%sum===0 ? true : false;
    
    return answer;
}