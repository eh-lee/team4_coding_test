//프로그래밍 기초문제 7.평균 구하기
/* 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. */

//내풀이
function solution(arr) {
    let answer = 0;
    for (let i = 0;i < arr;i++) {
        answer = answer += arr[i] / arr.length
         }
    return answer;
}
// for구문 for (let i = 0;i < arr;i++)에서 i < arr.length를 빠트렸다. 
//이 부분 보완하니 문제없이 작동하였다. 이제 조금씩 어떠한 논리와 원리로 구현되는지 이해가 된다.

//답안
//답안을 보면 
function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++){
     sum += arr[i];   // 배열의 요소들을 하나씩 더한다.
    }
    return answer = sum / arr.length; // 더한 값과 배열의 길이(=요소 갯수)를 나눈다.
}
//거의 비슷한데 let sum = 0; 을 지정해주고 하는 것을 보니 조금 더 코드가 이해가 되었다.

// reduce() 메서드를 사용해 풀어보기
function solution(arr) {
    return arr.reduce((sum, current) => sum + current) / arr.length;
  }

//이제 위의 풀이는 이해가 되니 아래 새로운 매소드 reduce를 배워보자. (reduce() : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.)
//아직은 reduce매소드 잘 이해가 가지 않는다.. (2023년2월16일)