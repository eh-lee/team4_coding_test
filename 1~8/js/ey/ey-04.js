// 두 정수 사이의 합 (https://school.programmers.co.kr/learn/courses/30/lessons/12912)


function solution(a, b) {
    var answer = 0;

    if (a >=b ) {
        for (let i = b; i <= a; i++) {
            answer += i
        }
    } else { 
        for (let j = a; j <=b; j++) {
            answer += j
        }
    }
    return answer;
}


/* 
// Math.abs로 푸는 방법은 없나....?

let a = 3
let b = 5

let gap = Math.abs(a - b);
console.log(gap);

for ( let i = a; i=gap ; i++ ) {
    console.log(i)

*/

/* 
// 이건 도대체 왜 오류가 났는가..

function solution(a, b) {
    var answer = 0;

    if (a < b) {
        for ( let i = a; a <= b; i++) {
            answer += i
        } {
            for ( let j = b; b <=a; j++) {
                answer += j
            }
        }
    }
    
    return answer;
}
 */