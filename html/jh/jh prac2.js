//프로그래밍 기초문제 2.짝수와 홀수
//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
//num은 int 범위의 정수입니다.
//0은 짝수입니다.

//내 풀이
function solution(num) {
    var answer = '';
    if (num/2 = 0) {
        result("Even")
    };   else {
        result("Odd")
    };
    return answer;
}
/* '/'가 아니라 홀짝 구할때'%' 쓰는 것 기억하자.
여기서 if (num & 2 = 0) 가 아닌 if (num & 2 === 0) 인 이유가 무엇인가?? 생각해보기
대략적으로 어떤 함수 쓰고 어떠하게 진행 되는지 예상은 했지만 많이 써보지 않아서 함수 외 문법(?)적인 부분 더욱 익숙해져야겠다. */


//풀이
function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        return answer = "Even"
    } else {
        return answer = "Odd"
    }
    return answer;
}


//재풀이

function solution(num) {
    var answer = '';
    if(num % 2 === 0) {
        return answer = "Even"
    }  else {
        return answer ="Odd"
    }
    return answer;
}