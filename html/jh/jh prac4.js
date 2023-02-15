//프로그래밍 기초문제 4.두 정수 사이의 합
/*두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다. */

//내 풀이
function solution(a, b) {
    var answer = 0;

    return answer;
}

// if랑 for문을 사용해야 될 거 같다는 막연한 생각만 들고 도저히 어떻게 건들여야 할 지 몰랐다. 또한 a와 b의 대소관계는 정해져있지 않다는 것을 어떻게 표현해야 할지 전혀
//감이 오지 않았다... 


//풀이
function solution(a, b) {
    var answer = 0;
    if(a>=b){
        for(let i=b; i<=a; i++){
            answer+=i;
        }
    }else{
        for(let j=a; j<=b; j++){
            answer+=j;
        }
    }
    return answer;
}
// if문을 통해 a와 b의 대소관계를 이렇게 표현할 수 있구나 깨달았다. 여기서 이해가 가지 않는 부분은 '+=' 부분이였다.
// 알듯말듯 모르겠다.

//다시 문제 풀이
function solution(a, b) {
    var answer = 0;
    if (a >= b) {
        for (i=b; i<=a; i++)
        
    }

    return answer;
}


//11