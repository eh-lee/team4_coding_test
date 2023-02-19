// 짝수와 홀수 (https://programmers.co.kr/learn/courses/30/lessons/12937)

// 짝수: 2로 나누어 나머지가 없는 수
// 홀수: 2로 나누어 나머지가 있는 수


function solution(num) {
    if (num % 2 === 0 ) {
        return "Even"
    } return "Odd"
}


// function solution(num) { 
//     return num % 2 === 0? "Even" : "Odd"; 
// }

// 여기서 ===0은 없어도 되겠다. 어차피 나머지가 0이면 truely니까!
// 근데 걍 적는게 더 안전한 듯. 알아보기도 쉽고!