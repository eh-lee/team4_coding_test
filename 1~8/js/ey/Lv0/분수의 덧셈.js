/* 
1. 분자= 분자1*분모2 + 분자2*분모2, 분모= 분모끼리 곱셈
2. 1을 최대 공약수로 나눠줌
2-1. 분자 분모중에 더 작은 수를 찾아서 둘 다 나눠보기
2-1. 나눠서 떨어지면 그게 최대 공약수 > answer 리턴하기
2-2. 나눠서 안 떨어지면 더 작은 수에서 -1씩하며 나눠 떨어질 때까지 찾기
 */




function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    numer = numer1 * denom2 + numer2 * denom1;
    denom = denom1 * denom2;
    
    let smaller;
    if(numer > denom) {
        smaller = denom;
    } else {
        smaller = numer;
    }
    
    while (true) {
        if(numer % smaller === 0) {
            if(denom % smaller === 0) {
                return answer = [numer / smaller, denom / smaller];
            }
        }
        smaller = smaller - 1;
    }

}