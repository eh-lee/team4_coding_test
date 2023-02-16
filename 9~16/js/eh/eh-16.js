//https://school.programmers.co.kr/learn/courses/30/lessons/12916
//문자열 내 p와 y의 개수


//idea
//문자열에서 인덱스 찾기 && 비교하기
//p와 y 갯수 같 트루 틀리면 펄스 ! 삼항 연산자 쓰기
//indexOf('p P y Y) ..

let s = "pPoooyY"

console.log(s.indexOf('p')); //>0
console.log(s.indexOf('P')); //>1
console.log(s.indexOf('o')); //>2