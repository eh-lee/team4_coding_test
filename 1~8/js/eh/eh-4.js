//https://school.programmers.co.kr/learn/courses/30/lessons/12912
//두 정수 사이의 합



// Math.min(a, b), Math.max(a, b)




// //logic 1 .splice() 메서드 이용 => 실패..
// //두 정수를 하나의 배열로 묶고 그다음 오름차순으로 배열해야겠네유

// let a = 5, b =3;
// // console.log(b);

// let arr = [a, b];
// // console.log(arr); //> [5, 3]

// let ascendArr = arr.sort(function(a, b){return a-b});
// console.log(ascendArr); //> [3, 5]

// // //2
// // //Google: 배열 인덱스 추가하기 -> splice()
// let plusArr = ascendArr.splice(ascendArr[0], 0, 4); // 0번 인덱스자리에 추가할 건데, 삭제는 0, 추가할 인덱스는 4 왜 안 되지?.. ...
// console.log(plusArr); // > []  ??? 




// //logic 2
// let a = 5, b =3;
// // let answer = a+b; //이렇게 하면 전체 다 더하고 + a+b임
// let answer = 0;
// for (let i = Math.min(a, b); i <= Math.max(a,b); i++) { 
//     answer = answer + i; // answer = 5+3+4;
// }
//     return answer;
    

    //i=3; i<=5; i++ // 3 4 5  



    //최종

    // function solution(a, b) {
    //     var answer = 0;
    //     for (let i = Math.min(a,b); i<=Math.max(a,b); i++){
    //         answer = answer + i;
    //     }
    //     return answer;
    // }


//--REVIEW-😭

// //init code
// function solution(a, b) {
//     var answer = 0;
//     return answer;
// }

// //IDEA
// //작은 수부터 큰 수까지를 더하면 되는 것.
// //예시의 값 넣어서 init code 이해하기

// let a = 8, b = 5;

// function solution(a, b) {
//     var answer = 0;
//     return answer;
// }

// //1. 작은 수와 큰 수를 구분하기 -> Googling: 숫자 오름차순, 내림차순 JS -> .sort()
// //배열로 전환해서 sort 메서드 적용하기

// let arr = [a, b];
// console.log(arr);
// let arrSort = arr.sort();
// console.log(arrSort);

// //sort메서드를 거친 후 작은 수는 arr[0], 큰 수는 arr[1]
// //for문 조건식에 넣을 밸루를 얻었다!


// //2.for문에 넣기.

// let a = -3;
// let b = -5;

// let a = 3;
// let b = 5;
// let arr = [a, b];
// let sortArr = arr.sort();
// console.log(sortArr);
// let answer = 0;

// if(a && b >= 0) {
//     for (i=sortArr[0]; i<=sortArr[1]; i++){
//         answer = answer + i;
//         console.log(answer);
//     }
// } else {
//     for (i=sortArr[1]; i<=sortArr[0]; i++){
//         answer = answer + i;
//         console.log(answer);
//     }
// }

// console.log(answer);



// //

// function solution(a, b) {
//     let arr = [a, b];
//     let sortArr = arr.sort()
//     let answer = 0;
    
//     if(a && b >= 0) {
//         for (i=sortArr[0]; i<=sortArr[1]; i++){
//             answer = answer + i;
//         }
//     } else {
//         for (i=sortArr[1]; i<=sortArr[0]; i++){
//             answer = answer + i;
//     }
// }
//     return answer;
// }



// // 끝!



// // //최종

function solution(a, b) {
    let arr = [a, b];
    let sortArr = arr.sort()
    let answer = 0;
    
    for (i=sortArr[0]; i<=sortArr[1]; i++){
        answer = answer + i;
    }
    return answer;
}



let arr = [1, 2, 3]

