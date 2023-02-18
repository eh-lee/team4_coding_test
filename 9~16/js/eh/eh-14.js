//https://school.programmers.co.kr/learn/courses/30/lessons/12910
//나누어 떨어지는 숫자 배열



//IDEA
//오름차순
//arr.push()


// let arr = [5, 9, 7, 10];
// let divisor = 5;


// let arr = [5, 9, 7, 10];
// let divisor = 1;
// let answer = [];

// let arr = [3, 2, 6]
// let divisor = 10;

// for(let i = 0; i< arr.length; i++){
//     if(arr[i]%divisor == 0 ? answer.push(arr[i]) : null ){
//     } 
// }
// console.log(answer); //>[5, 9, 7, 10] 왜 바로 되지;;


// if(answer.length == 0){
//     answer.push(-1);
// }
// console.log(answer);






// //이제 + 오름차순 정렬
// // answer.sort() 이게 다네유..
// //근데 저걸로 하면 안 되구 .sort(funciton(a,b) {return a-b;})

// let arr = [9, 5, 10, 7];
// let divisor = 5;
// let answer = [];

// for(let i = 0; i< arr.length; i++){
//     if(arr[i]%divisor == 0 ? answer.push(arr[i]) : null ){
//     } 
// }
// // console.log(answer.sort()); //아 이거 유니코드 어쩌구라네..

// console.log(answer.sort(function(a, b)  {return a - b;}))


// if(answer.length == 0){
//     answer.push(-1);
// }


// // 끝.



//최종

function solution(arr, divisor) {
    var answer = [];
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%divisor == 0 ? answer.push(arr[i]) : null ){
        } 
    }
    // answer = answer.sort(function(a, b)  {return a - b;});
    answer = answer.sort((a,b) => a - b);
    
    if(answer.length === 0){
        answer.push(-1);
    }
    
    return answer;
}
