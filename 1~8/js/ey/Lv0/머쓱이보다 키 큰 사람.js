/* function solution(array, height) {
    var answer = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] > height) {
            answer += Number(array[i])
        } 
    }
    console.log(answer);
    // return answer.length;
}
 */
// 실패함... for에서 추출한 값을 어떻게 answer 배열 안에 넣을지 몰라서ㅠ







// 동찬님의 힌트를 받아서 시작!
// 1. 머쓱이 키 >> 순서배열 / 오름차순
// 2. 머쓱이 넣어서 순서배열
// 3. 배열 index값 가져오기


/* 
function solution(array, height) {
    var answer = 0;
    
    allOf = array.concat(height);
    
    answer = allOf.sort(function(a, b) {
        return b - a;
    });
    // console.log(answer);
    return answer.indexOf(height);
}
 */

/* 
시행착오들
1. allOf = array.push(hgight); 라고 했더니 콘솔을 찍어봤을 때 5가 나왔다.
1-1. height를 바로 넣으면 안 되는 건가 하는 생각에, height도 배열로봐야하나 싶어서
1-2. concat으로 해봄. 그렇게 콘솔에 찍어보니까 잘 들어가서






sort 쓸 때 a,b 자리에 매개변수를 넣어도 되나?
 */
