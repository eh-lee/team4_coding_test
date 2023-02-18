//https://school.programmers.co.kr/learn/courses/30/lessons/12930
//이상한 문자 만들기

//슈도
//s = "sth sths sth";
//-> StH StHs sTh
//for(let i=0; i< s.length; i++){
//  if (i%2 == 0 || i==0){
//    -> s[i] = s[i].toUpperCase(); //찾았음
//  } else {
//    -> s[i] => 소문자  
//  }
//}


//1
// let s = "sth sths sth";
// // let sArr = [s];
// console.log(s.length);
// console.log(s.charAt(0).toUpperCase());
// console.log(s[0]);
// s.charAt(0).toUpperCase();
// console.log(s[0]);
// console.log(s.toUpperCase());



//최종
// function solution(s){
//     let answer ="";

//     for(let i = 0; i<s.length; i++){
//         if(i%2 === 0 || i === 0){
//             answer += s.charAt(i).toUpperCase();
//             // console.log(answer);
//         } else {
//             answer += s.charAt(i);
//         }
//     }
//     return answer;
    
// }




//최종2

// function solution(s){
//     let answer ="";

//     for(let i = 0; i<s.length; i++){
//         if(i%2 === 0 || i === 0){
//             answer += s[i].toUpperCase();
//         } else {
//             answer += s[i];
//         }
//     }
//     return answer;
    
// }

//하.. 공백을 기준으로... 하...
//다시..



// let s = "aa aaa aa"
// let sArr = s.split(" ");
// sArr[0]
// sArr[1]
// ...
// sArr[len-1]
// 까지를 판단해야 하네


// ------------------------------------------
// let answer ="";
// let s = "aa aaa aa"
// let sArr = s.split(" ");
// console.log(sArr);

// for(let i = 0; i<sArr.length; i++){
//     for (let j = 0; j<sArr[i].length; j++){
//         if(j%2 === 0 || j === 0){
//             answer += s[j].toUpperCase();
//             console.log(answer);
//         } else {
//             answer += s[j];
//             // console.log(answer);
//         }
//     }
// }
// console.log(answer); //> AaAa Aa
// // return answer;
    


// ------------------------------------------re
// let answer ="";
// let s = "try hello world"
// let sArr = s.split(" ");
// console.log(sArr); //>['aa', 'aaa', 'aa']

// for (let i = 0; i<sArr.length; i++){ //i=0이면 일단 sArr[0]에 들어가
//     for (let j=0; j<sArr[i].length; j++){ //i=0 j=0이면 sArr[0][0]에 들어가이걸 sArr[0][j]까지 해서 sArr[0]을 만들고 i=1로 넘어간다
//         if (j%2===0){
//             answer += sArr[i][j].toUpperCase();
//             console.log(answer);
//         } else {
//             answer += sArr[i][j].toLowerCase();
//             console.log(answer);        
//         }
//     }
//     //이제 공백이 들어가야 하는데
//     //공백은 j=n (sArr[i].length)가 끝날 때마다 들어가는 거
//     // if (j=sArr[i].length-1 && i<sArr.length-1){ ////와 했다.. //하 근데 여기서 맨 마지막은 제외야..어카지
//     //     answer += ' ';
//     // }

//     if (i<sArr.length-1){  // 공백이 sArr
//         answer += ' ';
//     }
// }
// console.log(answer);




// //최종
// // let sArr = s.split(" ");
// // console.log(sArr); //>['aa', 'aaa', 'aa']



function solution(s){
    let answer ="";
    let sArr = s.split(" ");

    for (let i = 0; i<sArr.length; i++){
        for (let j=0; j<sArr[i].length; j++){
            if (j%2===0){
                answer += sArr[i][j].toUpperCase();
            } else {
                answer += sArr[i][j].toLowerCase();
            }
        }
        if (i<sArr.length-1){ //
            //첫 번째 i포문이 첫 번째 j포문을 다 돌리고 i조건식이 끝나기 직전에
            //한 번 들어가서 공백을 남기는 것!
            //-1하는 이유는 맨 마지막 i 돌릴 때는 문자열 뒤에 공백 만들면 안 되기 때문
            
            

            answer += ' ';
        }
    }
    return answer;
}



