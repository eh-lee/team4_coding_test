//https://school.programmers.co.kr/learn/courses/30/lessons/12903
//가운데 글자 가져오기


// let text = "abcde"
// let arrText = text.split("");//전체 단어의 스트링을 스플릿해서 하나씩 배열로 저장한 다음에 
// console.log(arrText); // >  ['a', 'b', 'c', 'd', 'e']
//이거를 if문 써서 반으로 나누는데, 짝수 갯수일 때랑 홀수 갯수일 때 조건 나눠서. 그다음 i[n]해서 꺼내면 되겟쥬?
// let sliceArr = arrText.slice(0, 2-1); //index 0에서 1까지를 잘라서 새 배열로 리턴.
// console.log(sliceArr); // >  ['a', 'b']

//그러면 .slice(0, n)에서 n만 구하면 되죠?
//인덱스나 렝스로 접근 가능하겠죠?

// console.log(arrText.length); //>5
// console.log(arrText.length/2); //>2.5 이거 매스 함수로 반올림? 반내림? 가능하겠쥬.
// console.log(Math.floor(arrText.length/2)); //>2 엇 홀수 갯수면 가운데 글자니까 반올림해야겠쥬? 
// console.log(Math.round(arrText.length/2)); //>3


// // 여기서 이제 함 트라이해 볼까유?
// let n = Math.round(arrText.length/2);
// let sliceArr = arrText.slice(0, n); // 9~10ln 주석처리했슴 참고.
// console.log(sliceArr); //> ['a', 'b', 'c'] 나옴당
// let result = sliceArr[sliceArr.length-1];
// console.log(result); //> c 잘 나오네용. 그럼 이때까지의 로직은 arrText의 length가 홀수일 때겠쥬?
// //홀수 로직까지 일단 정리해 볼까유?



// 문제 초기화 포맷에서 작성했음. 거기선 s가 text임.
// function solution(s) {
//     let arrText = s.split("") //전체 단어의 스트링을 스플릿해서 하나씩 배열로 저장한 다음에 
//     let n = Math.round(arrText.length/2);
//     let sliceArr = arrText.slice(0, n);
//     var answer = sliceArr[sliceArr.length-1];
//     return answer;
// }



//그럼 여기에 이제 홀짝만 구별하면 되겠쥬? if랑 % 연산자 써서 구별한 다음 터너리로 되려나?
//그것만 따로 해 볼까유?

// if(arrText.length%2 == 0){ //짝수면 //+ 슬라이스 메서드 다시 보면> let sliceArr = arrText.slice(0, 2-1); //index 0에서 1까지를 잘라서 새 배열로 리턴.
//     let sliceArr = arrText.slice(n-1, n);
//     var answer = toString(sliceArr); //에러 남.. 전부 주석하고 콘솔 찍어 보자.
// }

// if(arrText.length%2 == 1){ //홀수면
//     let sliceArr = arrText.slice(0, n);
//     var answer = sliceArr[sliceArr.length-1];
// }



//검사
//홀수 통과
// let s = "abcde"


// function solution(s) {
//     let arrText = s.split("") //전체 단어의 스트링을 스플릿해서 하나씩 배열로 저장한 다음에 
//     let n = Math.round(arrText.length/2);
//     if(arrText.length%2 == 0){
//       let sliceArr = arrText.slice(n-1, n);
//       var answer = toString(sliceArr);
//     }

//     if(arrText.length%2 == 1){ //홀수인 경우
//         let sliceArr = arrText.slice(0, n);
//         var answer = sliceArr[sliceArr.length-1];
//     }
    
//     return answer;
// }

// console.log(solution(s)); //> c  //홀수인 경우 잘 나옴



//검사
//짝수인 경우
// let s = "abcdef"

//     let arrText = s.split("") //전체 단어의 스트링을 스플릿해서 하나씩 배열로 저장한 다음에 
//     let n = Math.round(arrText.length/2);
//     console.log(n); //> n = 3

//     if(arrText.length%2 == 0){
//       let sliceArr = arrText.slice(n-1, n+1); // ['a', 'b', 'c', 'd', 'e', 'f']에서 34번째 인덱스 .slice(2,4) // (2,4)이 뜻이 2인덱스에서부터 가져올 건데 인덱스 4번부턴 잘라라. 그러니까 2~3까지
//       console.log(sliceArr); // > [c, d]
//       //   var answer = toString(sliceArr[0]) + toString(sliceArr[1]); //실패
//       //   var answer = sliceArr[0].join() + sliceArr[1].join() //실패
//       var answer = sliceArr[0].toString() + sliceArr[1].toString(); //성공 toString 메서드 다시 찾아봤더니 문법 잘못 따라했음 >cd 
    
//       console.log(answer);
//     }

//     if(arrText.length%2 == 1){ //홀수인 경우
//         let sliceArr = arrText.slice(0, n);
//         var answer = sliceArr[sliceArr.length-1];
//     }
    
    // return answer;



    //최종

    function solution(s) {
        let arrText = s.split("") //전체 단어의 스트링을 스플릿해서 하나씩 배열로 저장한 다음에 
        let n = Math.round(arrText.length/2);
    
        if(arrText.length%2 == 0){ //짝수인 경우
            let sliceArr = arrText.slice(n-1, n+1);
            var answer = sliceArr[0].toString() + sliceArr[1].toString();
        }
    
        if(arrText.length%2 == 1){ //홀수인 경우
            let sliceArr = arrText.slice(0, n);
            var answer = sliceArr[sliceArr.length-1];
        }
        return answer;
    }