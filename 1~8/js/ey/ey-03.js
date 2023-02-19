// 가운데 글자 가져오기 (https://programmers.co.kr/learn/courses/30/lessons/12903)

//.substring()
//(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)


function solution(s) {
    let slg = s.length;
    let cut = Math.floor(slg/2);
    
    if (slg % 2 === 0) {
        return s.substring(cut-1, cut+1);      
    } return s.substring(cut, cut+1);
    
    return solution;
}

// 두번째 풀이 

function solution(s) {
    var answer = '';
    let lgth = Math.floor(s.length/2);
    
    if (s.length%2===0) {
        answer = s.substring(lgth-1, lgth+1);
    } else {
        answer = s.substring(lgth, lgth+1);
    }
    return answer;
}

