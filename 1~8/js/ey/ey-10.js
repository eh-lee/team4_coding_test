// 행렬의 덧셈 
// https://programmers.co.kr/learn/courses/30/lessons/12950
// 직사각형 별찍기의 심화판!


function solution(arr1, arr2) {
    var answer = [[]];
    
      for (let i=0; i<arr1.length; i++) { 
          answer[i] = [];
        for (let j=0; j<arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

// answer[i].push( arr1[i][j] + arr2[i][j]);
// 이렇게 표현하는 쪽이 더 직관적인것 같다.