// 정수 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var answer = 0;
    
    let nArray = Array.from( String(n) )

    let deNumberArray = nArray.sort(function(a,b) { 
    return b - a;
    });

    let deNumberStr = (deNumberArray.toString()).replace(/,/g, "");
    
    return Number(deNumberStr)
    
}


// split 쓰면 문자열 배열로 바꿀 수 있어!!!!
// join('')?