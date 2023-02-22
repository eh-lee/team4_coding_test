//프로그래밍 기초문제 14.나누어 떨어지는 숫자 배열
//https://school.programmers.co.kr/learn/courses/30/lessons/12910

//풀이
function solution(arr, divisor) {
    var answer = 0;
    for(let i = 0; i < arr.lenth; i++) {
      if(arr[i] % divisor == 0) {
          answer = arr[i]
          } else if(arr % divisor == 0) {
           answer = arr.sort   
              } else {-1}
        }
    return answer;
}

//두번째시도
두번째풀이
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.lenth; i++) {
      if(arr[i] % divisor == 0) {
          //answer = arr[i] //이것이 문제다. 여기서는 answer가 배열이기에 더하는것이 아닌 넣어줘야해. push쓴다.
          answer.push(arr[i]);
          } else if(arr % divisor == 0) {
           answer = arr.sort((a,b) => a - b)   
              } //sort함수 쓰는거 외우기(a-b면 오름차순정렬)
        //else {-1} -1을 넣어줘
        else {
            answer.push(-1)
        }
        }
    return answer;
}

//세번째시도
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % divisor == 0) {
         answer.push(arr[i])
          } 
    }
    if(answer.length == 0) {
        return [-1]
    }
    
       answer.sort((a,b) => a - b)
    return answer;
}