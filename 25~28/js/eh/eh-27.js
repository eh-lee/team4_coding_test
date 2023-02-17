//https://school.programmers.co.kr/learn/courses/30/lessons/12943
//콜라츠 추측

//let n = 6;

// function solution(num) {
//     var answer = 0;
//     return answer;
// }

// if (num%2===0){
//     num/2
// }

// for (let i = 0; i<500; i++){
//     if(num%2 === 0){
//         num = num/2;
//         if(num%2 === )
//     }

    

// }


 


//1차 제출
//테스트13 실패

// function solution(num){
//     let answer = 0;
//     while(num !== 1 && answer < 500){
//         num%2 === 0? num = num/2 : num = num*3 + 1;
//         answer++;
//     } if (num === 1 ? answer : answer = -1)
//     return answer;
// }



//디버깅: solution(1) > answer = undefined 나옴
function solution(num){
    let answer = 0;
    
    if(num ===1){
        return 0;
    }
    // 문제 부분 추가. 그런데 이 이프문 없을 때 아래 이프문에서는 왜 undefined
    //  나오는지 확실히 모르겠음.

    console.log(num);
    while(num !== 1 && answer < 500){
        num%2 === 0? num = num/2 : num = num*3 + 1;
        answer++;
    } if (num === 1 ? answer : answer = -1)
    console.log(answer);
    console.log(num);
    return answer;
    // console.log(answer);

}

//while은 계속 돌림 조건까지.