//https://school.programmers.co.kr/learn/courses/30/lessons/12915
//문자열 내 마음대로 정렬하기


// function solution(strings, n) {
//     strings.sort((a,b) => {
//         if(a[n]>b[n]){
//             return 1; //오름차순이니까. 그리고 .sort method에 대한 이해도 필요해
//                         //sort(a,b)는 a-b하거든 그래서 양수면 오름차순
//                         //만약에 이때 부등호 바꾸거나 return 값을 negative로 주면
//                         //내림차순으로 되겠쥬?
//         } else if(a[n]<b[n]){
//             return -1;
//         } else {
//             if (a>b){ //이거는 n번째 글자가 아니라 그냥 그 전체 비교. 그니까 n번째 인덱스 밸루가
//                         //같을 경우에 대비해서 하는 것.
//                 return 1;                
//             } else {
//                 return -1;
//             }
//         }
//     });
//     return strings;    
// }



function solution(strings, n) {
    var answer = [];
    var indexList = [];
    strings.sort(function(a,b){
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        if(a > b) return 1;
        if(b > a) return -1;
    });
    return strings;
}