// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    var answer = 0;

    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]
    }
    
    return answer / arr.length;
}

// 두번째 풀이
function solution(arr) {
    var answer = 0;
    
    arr.map(a => answer += a / arr.length )
    
    return answer;
}