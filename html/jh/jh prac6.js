//프로그래밍 기초문제 5.없는 숫자 더하기
/* 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다. */

//내 풀이
//분명 한 그룹을 쭉  정렬하는 메소드가 있을거라 생각하는데 그 방법을 몰라서 우선 1~9의 총합 45에서 빼는 것을 생각했다.

function solution(numbers) {
    let arr = str;
    let str = sum(a+b);
    answer = str - 45;
    return answer;
}

//답안 풀이
function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i; 
    } 
    return answer;
}

//arr.includes(valueToFind)는 배열에 어떤 값이 있는지 확인하는 메소드다. 한 번 공부하고 활용해보자.


//다시 풀이
function solution(numbers) {
    var answer = 0;
    for(let i=0;i < 9;i++) {
        if(!numbers.includes(i)) += i;
    }
    
    return answer;
}
// if(!numbers.includes(i)) += i;} 여기서 i를 어디에다가 더할지 안 적어주었고 9가 아니라 10이다.1~9까지의 숫자이기 떄문에.
