// //https://school.programmers.co.kr/learn/courses/30/lessons/12947
// //하샤드 수

// let x = 12;
// x = x + "";
// // console.log(typeof(x));
// // x.split("");  
// // console.log(x); //> 10 //7라인이랑 9라인 결과가 왜 다르지?
// let arr = x.split("");
// // console.log(arr); // > ['1', '0']

// // console.log(typeof(Number(arr[1])));
// //이거를 arr.len 만큼 돌려서
// //다 더한 다음에

// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum += Number(arr[i]);
// }
// // console.log(sum); 
// //자리의 합이 sum
// //x를 sum으로 나누기.

// // 그다음에 
// if(x%sum===0 ? answer = true : answer =false);
// console.log(answer);


//정리
//최종 
function solution(x) {
    let answer = true;
    x = x + "";
    let arr = x.split("");
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum += Number(arr[i]);
    } 
    
    if (x%sum===0 ? answer = true : answer =false);

    return answer;
}

//원트에 성공 !!