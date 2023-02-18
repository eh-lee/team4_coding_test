// 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922


function solution(n) {
    var answer = '';
    
    for (let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            answer += '박'
        } else {
            answer += '수'
        }
    }
    return answer;
}


// 좀 더 이쁘게 만들면?
/* 
function solution(n) {
    var answer = '';
    
    for (let i = 1; i <= n; i++) {
        i % 2 === 0 ? '박' : '수';
    }
    
    return answer;
}
 */
// 근데 오류남 ㅋㅋㅋㅋㅋㅋㅋ...  
// 헐 또 return 빼먹었어ㅠㅠㅠㅠㅠㅠ!!! 이따 다시해봐야지

//동찬님 숙제. repeat 사용해서 풀어보기!
/* 
function solution(n) {
    var answer = '';
    
    if(n % 2 === 0) {
        answer = '수박'.repeat(Math.floor(n/2));
    } else if (!n % 2 === 0) {
        answer = '수박'.repeat(Math.floor(n/2)) + '수'.repeat(n%2);
    }
    return answer;
}
 */

// '수'는 굳이 repeat을 할 필요가 없구나;;
/* 
function solution(n) {
    var answer = '';
    
    if(n % 2 === 0) {
        answer = '수박'.repeat(Math.floor(n/2));
    } else if (!n % 2 === 0) {
        answer = '수박'.repeat(Math.floor(n/2)) + '수';
    }
    return answer;
}
 */

