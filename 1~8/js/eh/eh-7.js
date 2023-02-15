//https://school.programmers.co.kr/learn/courses/30/lessons/76501
//음양 더하기


//절댓값 abs / 부호 signs
//true and false로 분류해서

//logic 1

// let absolutes = [4, 7, 12], signs = [true, false, true];
// //idea
// for (let i = 0; i < absolutes.length; i++){
//     if (signs[i] == true ? absolutes[i]=absolutes[i] : absolutes[i]=absolutes[i]*-1){
//     }
// }
// console.log(absolutes); // > [4, -7, 12]

//이렇게 인덱스 음양 업뎃하고





//logic2
//이제 이 부호가 업뎃된 배열을 전부 더해 주면 끝


// let absolutes = [4, 7, 12], signs = [true, false, true];
// let answer = 0; //배열의 합 변수

// for (let i = 0; i < absolutes.length; i++){
//     if (signs[i] == true ? absolutes[i]=absolutes[i] : absolutes[i]=absolutes[i]*-1){
//     }
// }
// // console.log(absolutes); // > [4, -7, 12]
// for (let i = 0; i < absolutes.length; i++){
//     answer += absolutes[i];
// }
// console.log(answer);    //> 9
// //끝



//최종

function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i < absolutes.length; i++){
        if (signs[i] == true ? absolutes[i]=absolutes[i] : absolutes[i]=absolutes[i]*-1){
        }
    }

    for (let i = 0; i < absolutes.length; i++){
        answer += absolutes[i];
    }
    return answer;
}




