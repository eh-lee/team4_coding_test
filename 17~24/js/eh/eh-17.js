//https://school.programmers.co.kr/learn/courses/30/lessons/12918
//문자열 다루기 기본


function solution(s) {
    var answer;
    
    if(s.length === 4 || s.length ===6){
        if(isNaN(s)){
            answer = false;
        } else {
            answer = true;
        }
    } else {
        answer = false;
    }
    return answer;
}


//error case
//solution("0e00") > answer = true
//자바스크립트에서는 이유는 자바스크립트에서는 숫자에 e가 붙으면
//지수로 인식하여 문자인 경우도 그냥 숫자로 인식해버린다는 것..



//수정 최종

function solution(s) {
    var answer;
    
    if(s.length === 4 || s.length ===6){
        if(isNaN(s) || s.includes('e') || s.includes('E')){
            answer = false;
        } else {
            answer = true;
        }
    } else {
        answer = false;
    }
    return answer;
}





//* 일단 한글로 쓰고 그것을 코딩으로 옮긴다

//* 의사코드 pseudo code 습관화
//https://42kchoi.tistory.com/114

//* debugging
//chrome으로 디버깅하기
//중단점으로 검사, 중단점 비활성화해서 (인자 삽입하여 테스트)


//슈도코드로 확인하고, 디버깅으로 검사한다!









// 김용민(13기)
// 10:27 AM
// function solution(s) {
// var answer = true;
// var convert = [...s];
// ['a','1','2','3', '0']
// var len = convert.length;
// if(len == 4 || len == 6){
// } else {
// answer = false;
// return answer;
// }

// convert.forEach((element) => {
// var temp = Number(element);
// if( !temp && temp!=0 ){
// answer = false;
// }
// });
// return answer;
// }
