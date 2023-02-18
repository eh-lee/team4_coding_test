// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    var answer = 0;
    
    let nArray = n.toString().split('');

    nArray.map(a => answer += +a);

    return answer;
}

//map을 돌려서 answer을 어떻게 나오게 해야하는지 조금 해맸지만
//23번 문제 동찬님 코드를 참고해서 풀었다!!!



