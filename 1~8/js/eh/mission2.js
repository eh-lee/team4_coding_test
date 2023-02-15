//https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript
//최소직사각형


// function solution(sizes) {
//     var biggerSideMax = 0; //긴 변 중의 긴 변 변수 선언
//     var smallerSideMax = 0; // 짧은 변 중의 긴 변 변수 선언
    
//     for(let i=0; i<=sizes.length-1; i++) { // 카드를 전체 다 돌려서 비교해 보겠다. i=0 [60, 50] sizes[0]=60, sizes[1]=50
//         if (sizes[i][0]>=sizes[i][1]){  //i번째 배열(어레이)의 변수(인자) 구성이 [60,50], 0번 인자가 긴 변 1번 인자 짧은 변인 경우,
//             if(sizes[i][0]>=biggerSideMax){ //
//             biggerSideMax=sizes[i][0]; // 긴 변 중의 긴 변 업데이트
//           } if (sizes[i][1]>=smallerSideMax){
//             smallerSideMax=sizes[i][1];
//             }
        
//     } else {    //i번째 배열(어레이)의 변수(인자) 구성이, 0번 인자가 짧은 변 1번 인자 긴 변인 경우,
//         if(sizes[i][0]>=smallerSideMax){
//             smallerSideMax = sizes[i][0];
//         } if (sizes[i][1]>=biggerSideMax){
//             biggerSideMax=sizes[i][1];
//         }
//     }
//         return biggerSideMax * smallerSideMax;
// }
    
    
    //ex) sizes=[[60,50],[30,70],[60,30],[80,40]];

    function solution(sizes) {
        let biggerSideMax = 0;
        let smallerSideMax = 0;
        // const answer = biggerSideMax*smallerSideMax;        
    //big 60 70 70 80
    //sml 50 50 50 50 
            
        for(let i=0; i<=sizes.length-1; i++) {
            if (sizes[i][0]>=sizes[i][1]){ //i번째 배열의 변수 구성이, 0번 변수가 긴 변 && 1번 변수가 짧은 변인 경우,  
                if(sizes[i][0]>=biggerSideMax){
                    biggerSideMax=sizes[i][0];  //i번째 배열의 0번 변수가 기존 긴 변의 최대값보다 크면 새로운 긴 변의 최대값.
                } if (sizes[i][1]>=smallerSideMax){  //이중if문 && i번째 배열의 1변 수가 기존 짧은 변의 최대값보다 크면 새로운 짧은 변의 최대값
                    smallerSideMax=sizes[i][1];
                }
            } else {                        //i번째 배열의 변수 구성이, 0번 변수가 짧은 변 && 1번 변수가 긴 변인 경우,
                if(sizes[i][0]>=smallerSideMax){
                    smallerSideMax=sizes[i][0];
                } if (sizes[i][1]>=biggerSideMax){
                    biggerSideMax=sizes[i][1];
                }    
            }
        }
            return biggerSideMax*smallerSideMax;
    }