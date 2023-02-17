// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901 

function solution(a, b) {
    var answer = '';
    
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   
    let wantDate = new Date(2016, a-1, b);
    let wantDay = wantDate.getDay();
    
    return answer = day[wantDay];
}

//배열을 만들어야 되는지 몰라서... 흑흑