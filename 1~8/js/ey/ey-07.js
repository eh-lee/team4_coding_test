//음양 더하기 (https://school.programmers.co.kr/learn/courses/30/lessons/76501)

// absolutes = [4, 7, 12]
//              
// signs = [true, false, true]
// > answer = +4 -7 +12


function solution(absolutes, signs) {
    var answer = 0 +4 -7 +12
    
    for (let i = 0; i < signs.length; i++) {
        if(signs[i] === true) {
            answer + answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }

    return answer;
}

// 그냥 1과 -1 곱해버리는 방법
/* 
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
} 
*/