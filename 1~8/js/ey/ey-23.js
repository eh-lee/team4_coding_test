// 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932


function solution(n) {
    let num = n.toString().split('');
    let nArray = num.map(a => Number(a));
    let denArray = nArray.reverse()

    return denArray
}

/* 
function solution(n) {
    var answer = [];
    let num = n.toString().split('');
    nArray = num.map(a => Number(a));
    console.log(num)

    denArray = nArray.sort(function(a, b) {
        return b - a;
    });

} 
*/
/* 
여기서는 sort가 어울리지 않아. sort는 오름/내림차순인데!!
문제에서는 뒤집으라고 했음. 뒤집는 것과 내림차순은 달라!! 
*/


// 동찬님 코드
/* 
function solution(n) {
    let answer = []
    n.toString().split('').reverse().map((a)=>answer.push(+a))
    return answer
    } 
*/

//Number 대신 +로 숫자변환 가능!!