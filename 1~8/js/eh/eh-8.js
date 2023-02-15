//https://school.programmers.co.kr/learn/courses/30/lessons/12944
//평균 구하기

//idea
//배열 인덱스 다 더하고 인덱스 갯수만큼 나누기하면 끝.


// let arr = [1,2,3,4];
// let answer = 0;

// for(let i = 0; i<arr.length; i++){
//     answer += arr[i];
// }
// console.log(answer/2);

//끝?..이 아니네
//




//끝인 줄 알았는데 실패 뜬 코드.
// function solution(arr) {
//     var answer = 0;

//     for(let i = 0; i<arr.length; i++){
//         answer += arr[i];
//     }
//     return answer/2;
// }




// //해결. 원인: 문제를 잘못 읽음 평균값 리턴인데.. 2로 나눔;
// let arr = [1,2,3,4];

// function solution(arr) {
//     var answer = 0;
    
//     for(let i = 0; i<arr.length; i++){
//         answer += arr[i];
//     }
//     console.log(answer); //> 10 
//     answer = answer/(arr.length);
//     console.log(answer); //>5
//     return answer;
// }

// solution(arr);



//최종

function solution(arr) {
    var answer = 0;

    for(let i = 0; i<arr.length; i++){
        answer += arr[i];
    }
    answer = answer/(arr.length);
    return answer;
}



