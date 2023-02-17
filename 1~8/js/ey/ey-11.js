// x만큼 간격이 있는
// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    var answer = [];
    
    for (let i = 1; i <= n; i++) {
        answer.push(x*i);
    }    
    return answer;
}
/* 
function solution(x, n) {
    var answer = [];
    
    for (let i = 1; i <= n; i++) {
        answer[i] = x*i;
    }    
    return answer;
}
 */
// 이렇게하면 [null,2,4,6,8,10]나오긴 하는데,
// 사실은 쌓이고 있는 건 아니라고 한다.

// 배열에 쌓고 싶을 땐 push!!!!