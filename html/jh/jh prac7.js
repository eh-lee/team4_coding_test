//프로그래밍 기초문제 6.음양 더하기
/* 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다. */


//내 풀이
signs값이 false면 absolutes에다 마이너스 해줘야하는데 어떻게 각 항목에 적용을 해야할 지 한참 고민했다.


// absolutes[4,7,12]
// signs[true,false,true]

function solution(absolutes, signs) {
    let answer = 0;
    if(signs = false) {
        absolutes = -absolutes
    } else absolutes;
    answer += absolutes;
    return answer;
}
console.log(answer)

//답안 풀이
/*absolutes와 signs의 배열은 같다. 그렇기에 내가 고민한 것은 필요가 없었다. 굳이 하나하나 연결(?)을 할 필요가 없다.
반복문 쓰는 것을 빼먹었다. */
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}

//다시 풀이
//  괄호 같은 거 우선 제대로 쓰기. for 문까지는 잘 썼으나 그 뒤 if문에서 조건 제대로 안 걸어 줬다. 
function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0;i < absolutes.length;i++); {
        if(i === true) {
            answer = absolutes + i;
        } else {
        answer = abosultes - i;
        }
        return answer;
    }
}

//또 다시 풀이
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0;i < absolutes.length;i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        }   else {
            answer = answer - absolutes[i];
        }
    }

    return answer;
}