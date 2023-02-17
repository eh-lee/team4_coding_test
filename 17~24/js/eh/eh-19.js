//https://school.programmers.co.kr/learn/courses/30/lessons/12922
//수박수박수박수박수박수?

//홀수번 인덱스는 수
//짝수번 인덱스는 박
//이걸 반복 -> for
//n이 홀수면 if ( n%2 != 0  )=>



//solution(n)
function solution(n){
    var answer = '';
    
    for(let i = 0; i < n; i++){
        if (i%2 != 0){
            answer += '박';
        } else {
            answer += '수';
        }
    }

    return answer;
}