// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = true;
    
    let pP = '';
    let yY = '';
    
    let condition = s.includes('p') || s.includes('P') 
    || s.includes('y') || s.includes('Y');
    
    if(condition) {
        for (let i = 0; i<s.length; i++) {
            if (s[i]=='p') {
                pP += ('p')
            } else if(s[i]=='P') {
                pP += ('P')
            } else if(s[i]=='y') {
                yY += ('y')
            } else if(s[i]=='Y') {
                yY += ('Y')
            }
        }
    } answer = true;

    
    if(pP.length===yY.length) {
        answer = true;
    } else {answer = false};
    return answer;    
}
// countP = sChange.split('p').length-1;
//은선님 방법 모방
/* 
function solution(s){
    var answer = true;
    
    let sChange = s.toLowerCase();
    let count = 0;

    for(let i=0; i<s.length; i++) {
        if(sChange[i].includes('p')) {
            count++;
        } else if(sChange[i].includes('y')) {
            count--;
        }
    }
    
    if(count==0) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;    
}

 */