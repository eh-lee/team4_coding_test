//프로그래밍 기초문제 4.문자열을 정수로 바꾸기
/*문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요. 
s의 길이는 1 이상 5이하입니다.
s의 맨앞에는 부호(+, -)가 올 수 있습니다.
s는 부호와 숫자로만 이루어져있습니다.
s는 "0"으로 시작하지 않습니다.
예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다. */

//내 풀이
function solution(s) {
    var answer = 0;
    answer = +s
    return answer;
}
//계속 고민하다 num(s)하였다가 +s를 해보았다. 정답이였다. 뭔가 굉장히 복잡할 줄 알았는데
//의외로 간단하여 당황하였다. 정수로 바꾸는 방법 여러가지 있기에 다른 방법들도 알아두자.

//풀이
function solution(s) {
    return Number(s);
}

function solution(s) {
    return parseInt(s)
}

function strToInt(str) {
    return +str
}

//Number(s) 부분은 외워두도록 하자.
