//https://school.programmers.co.kr/learn/courses/30/lessons/12950
//행렬의 덧셈


//idea
//인덱스 쪼개기

// //1
// let arr1 = [[1,2], [2,3]];
// let arr2 = [[3,4], [5,6]];
// let arr3 = [[], []];

// arr3[0][0] = arr1[0][0] + arr2[0][0] 
// arr3[0][1] = arr1[0][1] + arr2[0][1] 

// console.log(arr3);



// //2
// let arr1 = [[1,2], [2,3]];
// let arr2 = [[3,4], [5,6]];
// let answer = [[], []];

// for(i=0; i<arr1.length; i++){
//     answer[i][0] = arr1[i][0] + arr2[i][0] 
//     answer[i][1] = arr1[i][1] + arr2[i][1] 
// }
// console.log(answer); //> [[4,6], [7, 9]]
//끝?..



//2 중간 // 인덱스.인덱스가 하나인 경우는 통과 못 했음. NaN 때문일 듯? 맞네 > [[4, NaN], [6, NaN]]
// function solution(arr1, arr2) {
//     var answer = [[], []];
    
    
//     for(i=0; i<arr1.length; i++){
//         answer[i][0] = arr1[i][0] + arr2[i][0] 
//         answer[i][1] = arr1[i][1] + arr2[i][1] 
//     }
//     return answer;
// }



//3
//해결: 인덱스.인덱스의 길이를 기준으로 if 문으로 분리하여 필터링

// let arr1 = [[1], [2]];
// let arr2 = [[3], [4]];
// let answer = [[], []];

// if(arr1[0].length >1 ){
//     for(i=0; i<arr1.length; i++){
//         answer[i][0] = arr1[i][0] + arr2[i][0] 
//         answer[i][1] = arr1[i][1] + arr2[i][1] 
//     }

// } else {
//     for(i=0; i<arr1.length; i++){
//         answer[i][0] = arr1[i][0] + arr2[i][0] 
//     }
// }
// console.log(answer);




//최종X
//-> 예시 문제 빼고 다 실패
// 인덱스.인덱스 갯수가 다른 경우의 문제인 듯.
//이건 지금 인덱스.인덱스 렝스가 1이나 2인 경우만 받아서.
// function solution(arr1, arr2) {
//     var answer = [[], []];
    
//     if(arr1[0].length >1 ){
//       for(i=0; i<arr1.length; i++){
//           answer[i][0] = arr1[i][0] + arr2[i][0] 
//           answer[i][1] = arr1[i][1] + arr2[i][1] 
//       }
    
//     } else {
//     for(i=0; i<arr1.length; i++){
//         answer[i][0] = arr1[i][0] + arr2[i][0] 
//     }
// }
//     return answer;
// }




//인덱스.인덱스의 렝스에 제한없이 포 프로퍼티 변경하자..!
//포문에 i 변수 말고 j 변수도 넣어야 하나?..!? 그걸 어케 한디야?..;;
//i j 검색하자..

// let arr1 = [[1], [2]];
// let arr2 = [[3], [4]];
// var answer = [[], []];
    
//     if(arr1[0].length >1 ){
//         for(i=0; i<arr1.length; i++){
//             answer[i][0] = arr1[i][0] + arr2[i][0] 
//             answer[i][1] = arr1[i][1] + arr2[i][1] 
//         }

//     } else {
//         for(i=0; i<arr1.length; i++){
//             answer[i][0] = arr1[i][0] + arr2[i][0] 
//         }
// }
// return answer;



//retry 이중 for문으로

// let arr1 = [[1,2,1], [2,3,1]];
// let arr2 = [[3,4,1], [4,5,1]];
// var answer = [[], []];
   
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr1[i].length; j++){
//             answer[i][j] = arr1[i][j] + arr2[i][j] 
//         }
//     }
//     console.log(answer); //> [[4, 6, 2], [6, 8, 2]]; 
//                         //> 



//최종2
//코드는 맞는데 런타임에서 에러
// function solution(arr1, arr2) {
//     var answer = [[], []]; //    var answer = [[]];  //이것도 런타임 에러

//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr1[i].length; j++){
//             answer[i][j] = arr1[i][j] + arr2[i][j] 
//         }
//     }
//     return answer;
// }

//원인: [[],[]] [[],[]] 이거랑
//[[ , ], [ , ]] [[ , ], [ , ]] 이거만 되지
//[[],[],[]] [[],[],[]] 이상은 안 됨
//왜? 자리를 고정해 놔서
//그러니까 미리 방을 파 주자


function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[]; //1차 방 파 주기
        console.log(answer);
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}




