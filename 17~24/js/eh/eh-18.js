//https://school.programmers.co.kr/learn/courses/30/lessons/12919
//서울에서 김서방 찾기


//슈도코딩
//seoul = [];
// `"${seoul[1]}의
//"김서방은 x에 있다"
//x = Kim이라는 문자열이 들어간 배열의 인덱스 번호.
//var answer = '김서방은 에 있다';


// function solution(seoul){
//     // var answer = '';
//     // return answer;
//     seoul.indexOf("Kim")
//     console.log(seoul.indexOf("Kim")); //> 1 인덱스 번호 찍힘.
// }



//2 ex) solution(["jane", "Kim"]);
function solution(seoul){
    var answer = '';
    let x = seoul.indexOf("Kim")
    // return answer;
    // console.log(x); //> 1

    // answer = "김서방은 x에 있다";
    answer = "김서방은 "+x+"에 있다";
    return answer;
}