//https://school.programmers.co.kr/learn/courses/30/lessons/86051
//없는 숫자 더하기


//idea && logic
//0 ~ 9 중 없는 수를 찾아서 그걸 더한다..
//일단 찾자.. find(), filter()
//includes()
//+ ternary


//1

// let answer = 0;
// let numbers = [1,2,3,4,6,7,8,0]
// for (let i = 0; i <=9; i++){
//     if (numbers.includes(i) == true ? answer = answer : answer = answer+i){
//         console.log(answer);
//         // return answer;
//     }
// }

//헉 틀림
//문제: answer 값 받는 위치가 문제였음. 18ln.
//아 for 돌면서 5가 계속 찍힘 밖으로 내려서 최종값 앤서만 받아야 해



//2

// let answer = 0;
// let numbers = [1,2,3,4,6,7,8,0]
// for (let i = 0; i <=9; i++){
//     if (numbers.includes(i) == true ? answer = answer : answer = answer+i){
//         // return answer;
//     }
// }
// console.log(answer);




//최종
function solution(numbers) {
    var answer = 0;
    
    for (let i = 0; i <=9; i++){
        if (numbers.includes(i) == true ? answer = answer : answer = answer+i){
        }
    }
    return answer;
};