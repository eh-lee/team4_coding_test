// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

isNaN


/* 
function solution(s) {
    
    let answer = !isNaN(s)===true && (s.length===4 || s.length===6) ? 
        true : s.includes('e')===true ? true : false;
        
    return answer;
    
} */
/* 
function solution(s) {
    
    let answer = isNaN(s)===true && (s.length===4 || s.length===6) ? 
        false : s.includes('e')===false ? false : true;
        
    return answer;
    
} */

/* 
function solution(s) {
    
    let answer = !isNaN(s)===true && (s.length===4 || s.length===6) ? 
        true: false;
        
    return answer;
    
} */


    
//     let answer = !isNaN(s)===true && (s.length===4 || s.length===6) ? 
//         true : false;
//         

//e=숫자?




/* 
function solution(s) {
    
    let answer = !isNaN(s)===true && (s.length===4 || s.length===6) ? 
        true : isNaN(s)===true && s.includes('e' || 'E')===true ? false : false;
        
    return answer;
    
} 
*/

// 일단 문자열 길이로 먼저 걸러내기 
// 그 다음  isNaN으로 문자열 걸러내고, includes로 숫자로 인식하는 'e'와 'E' 걸러내고
// 나머지는 true

/* function solution(s) {
    var answer = true;
    
    if (s.length===4 || s.length===6) {
        if (isNaN(s)) {
            answer = false;
        } else if (s.includes('e')||s.includes('E')) {
            answer = false;
        } else answer = true;
    } else answer = false;
    return answer;
}
 */

// typeof로 푼 사람도 있고
// 정규식으로 푼 사람도 있다. 정규식 다시 찾아봐야지
/* 
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
 */

function solution(arr, divisor) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor===0) {
            answer.push(arr[i]);
        }
    }
    answer.sort((a,b) => a - b);
    
    if (answer.length===0) {
        answer.push(-1);
    }
    return answer;
}
