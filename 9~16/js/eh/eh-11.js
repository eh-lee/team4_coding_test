//https://school.programmers.co.kr/learn/courses/30/lessons/12954
//x만큼 간격이 있는 n개의 숫자



//Idea
// let x = 2;
// let n = 5;
// let answer = [];

// for (let i = 0; i<=n; i+=x){
    // x+=i
    // console.log(x); //> 2, 4
    // console.log(answer.push(x*i));
// }


// let answer = [2,4,6,8,10]




//.push() 실험
//&& logic 연구

// let x = 2;
// let n = 5;
// let answer = [];
// // answer.push(x);
// // console.log(answer); //>2

// // 그러면 2(x*1), 4(x*2), 6(x*3), 8(x*4), 10(x*5)
// for(i = 1; i<=n; i++){
//     answer.push(x*i);
//     // console.log(answer);
// }
// console.log(answer); // > [2, 4, 6, 8, 10]




//최종

function solution(x, n) {
    var answer = [];
    
    for(i =1; i <= n; i++){
        answer.push(x*i);
    }
    return answer;
}