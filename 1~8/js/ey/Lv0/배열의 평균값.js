//https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
    var answer = 0;
    for (let i=0; i < numbers.length; i++) {
        answer += numbers[i];
    }
    
    return answer / numbers.length;
}