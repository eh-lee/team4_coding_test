// ## 2번. 몇시간 했더라? (중)

// 지용이는 항해에서 한 주 동안 공부 기록을 남길 알고리즘을 만들어 보기로 결심했다.
// 항해의 체크인 페이지에는 몇 가지 조건이 있는데 이를 만족하는 알고리즘을 만들어 보자.

// - 체크인과 체크아웃은 항상 정시에 진행한 것으로 가정한다.
// - 체크아웃을 할 때 익일 시간은 24+a 로 계산한다. 즉 새벽 2시는 24+2 인 26으로 표기한다.
// - 체크인 페이지는 체크아웃이 새벽 5시 정각이나 새벽 5시를 넘어가면 체크아웃을 깜빡한 것으로 간주한다.
// 따라서 새벽 5시가 넘어가 체크아웃을 하게 되면 자동으로 체크아웃을 오후 9시(21시)로 한 것으로 처리한다.

// ### 제한 조건

// - 체크인(checkin)과 체크아웃(checkout)을 진행한 시간이 담긴 배열 두 개가 주어진다.
// - 각 배열에는 월요일부터 일요일까지 체크인/아웃을 한 시간이 담겨있다.
// - checkin과 checkout 배열의 길이는 각각 7 이다.


// function solution(){
    
    let checkIn = [9, 9, 8, 8, 7, 8, 9];
    let checkOut = [21, 25, 30, 29, 22, 23, 30];
    console.log(checkIn.length);
    
function solution(checkIn, checkOut){
    let answer = 0;
    for (let i = 0; i < checkIn.length; i++){
        if(checkOut[i]>=29 ? answer += 21 - checkIn[i] :
            answer += checkOut[i] - checkIn[i])
        answer;
    }
    return answer;
}