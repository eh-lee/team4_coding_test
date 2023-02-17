//https://school.programmers.co.kr/learn/courses/30/lessons/12935
//제일 작은 수 제거하기
//**

//arr = [4, 3, 2, 1]
//그냥 이거 내림차순이든 오름차순이든 해서 reduce로 인덱스 지정해서
//제거하면 되잖수. 지정할 인덱스 번호는 [arr.length-1]로 하면 되고
//+ if (arr.length = 1){return -1}


// arr = [5, 3, 8, 6, 10, 1]
// // arr = [10]


// // function solution(arr){
//     var answer = [];
//     if(arr.length !==1){
//         arr.sort((a,b)=>{
//             return b-a
//         });
//         }    arr.pop();
//         console.log(arr);
//     if(arr.length === 1 || arr.length === 0){
//         answer = [-1];
//         console.log(answer);
//     }
// }
//     } else {
//         answer = -1
//     }
//     return answer;
// }

// console.log(arr); //> [10, 8, 6, 5, 3, 1]
// //맨 뒤 배열 빼면 되겠쥬

// arr.pop();
// console.log(arr); //> [10, 8, 6, 5, 3]



//1차

// function solution(arr) {
//     var answer = [];
    
//     if(arr.length !==1){
//        arr.sort((a,b)=>{
//           return b-a
//       });
//     }    
//     arr.pop();
//     answer = arr;
    
//     if(arr.length === 1 || arr.length === 0){
//         answer = [-1];
//     }
//     return answer;
// }



//2차
// function solution(arr) {
//     var answer = [];
    
//     if(arr.length !==1){
//         arr.sort((a,b)=>{
//             return b-a
//         });
//         arr.pop();
//         answer = arr;   
//     } else {
//         answer = [-1];
//     }
//     return answer;
// }

//아 문제를 잘못 읽음..
//답은 내림차순 정렬이 아니여..


// function solution(arr){
//     let min = [];
//     let index = 0;
//     if(arr.length === 1){
//         return [-1];
//     }
//     min = arr.indexOf(Math.min(...arr));
//     // console.log(min);
//     index = arr.splice(min, 1);
//     console.log(index); //[min]

//     arr = arr.filter(function(item){
//         return item !== index
//     });
//     console.log(arr);
    
// }



//최종

function solution(arr){
    let min = [];
    let index = 0;
    
    if(arr.length === 1){
        return [-1];
    }
    
    min = arr.indexOf(Math.min(...arr));
    index = arr.splice(min, 1);


    arr = arr.filter(function(item){
        return item !== index
    });
    return answer = arr;
}

//배운 것 
// arr = arr.filter(function(item){
//     return item !== index
// });
//array 에서 "index"라는 값 제거하기.