// 가운데 글자 가져오기 (https://programmers.co.kr/learn/courses/30/lessons/12903)

function solution(s) {
    let slg = s.length;
    let cut = Math.floor(slg/2);
    
    if (slg % 2 == 0) {
        return s.substring(cut-1, cut+1);      
    } return s.substring(cut, cut+1);
    
    return solution;
}
