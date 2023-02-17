//서울에서 김서방 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
    var answer = "김서방은 " + seoul.indexOf('Kim') + "에 있다";
    
    return answer;
}



/* 
function solution(seoul) {
    var answer = "김서방은 " + KimIndex + "에 있다";
    let KimIndex = seoul.indexOf('Kim');
    return answer;
}
 */
// 이러니까 오류났어ㅠㅠ.... 근데 생각해보니까 KimIndex가 더 아래에 있어서?


/* 
function solution(seoul) {
    var answer;
    
    let KimIndex = seoul.indexOf('Kim');
    
    return answer = "김서방은 " + KimIndex + "에 있다";
} 
*/