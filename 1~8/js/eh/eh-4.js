
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
//     // console.log(answer);    
//     return answer;
    

    //i=3; i<=5; i++ // 3 4 5  



    //최종

    function solution(a, b) {
        var answer = 0;
        for (let i = Math.min(a,b); i<=Math.max(a,b); i++){
            answer = answer + i;
        }
        return answer;
    }
