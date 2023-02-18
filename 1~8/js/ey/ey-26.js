// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    var answer = [];
    
    if (arr.length===1) {
        return answer = [-1];
    }
    
    reArr = arr.map(a => a).sort((a,b) => a-b);
    minNum = Math.min.apply(null, reArr);

    answer = arr.filter(a => a!=minNum);

    return answer;
}

/* 
minNum = Math.min.apply(null, reArr);

이 부분은 아직 잘 이해가 안 간다. 다만 reArr배열에서
가장 작은 수를 구하려면 저렇게 써야한다고.....
 */