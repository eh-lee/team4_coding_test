// 없는 숫자 더하기 (https://school.programmers.co.kr/learn/courses/30/lessons/86051)


/* 시작코드의 answer값이 -1로 세팅된 문제와 0으로 세팅된 문제는 차이가 뭘까?

function solution(numbers) {
    var answer = -1;
    return answer;
}
 */


// 검색 후 includes를 알게 됨...
function solution(numbers) {
    var answer = 0;
    
    for (let i=0; i<=9; i++) {
        if(numbers.includes(i) == false) {
            answer += i
        }
    }
    return answer;
}
// if문 더 잘 이해하기!! >> return


// reduce() 찾아보기!
/* 
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
} */
