// // test_ex3

// function solution (s){
//     let arrNum = s.split(" ");
//     let arrPrime = [];
//     let maxPrime = 0;
//     let arrRest = [];
//     let minRest = 0;
//     let answer = "";

//     function isPrimeNumber(n){
//         if(n==1) return false;
//         for(let i=2; i<n; i++){
//             if(n%i==0) return false;
//         }
//         return true;
//     } 

//     for (let i = 0; i<arrNum.length; i++){
//         if (isPrimeNumber(arrNum[i]) === true){
//             arrPrime.push(Number(arrNum[i]));
//             maxPrime=Math.max(...arrPrime);
//         } else {
//             arrRest.push(Number(arrNum[i]));
//             arrMin=Math.min(...arrRest);
//         }
//         answer = minRest + " " + maxPrime;
//     }

//     return answer;
// }



//CT 17

// function solution(s) {
//     var answer;

//     if(s.length === 4 || s.length ===6 ){
//         if(isNaN(s) || s.includes('e') || s.includes('E')){
//             answer = false;
//         } else {
//             answer = true;
//         }

//     } else {
//         answer = false;
//     }
//     return answer;
// }



//CT 24

// function solution(s){
//     var answer = 0;
//     n = n + "";
//     let arr = n.split("");
//     let str = "";

//     arr.sort((a,b) => {
//         return b-a;
//     });

//     for(let i = 0; i<arr.length; i++){
//         str += Number(arr[i]);
//     }
//     return answer = Number(str);
// }



//CT 21

function solution(s){
    let answer = "";
    let sArr = s.split(" ");

    for (let i = 0; i<sArr.length; i++){
        for(let j=0; j<sArr[j].lengtj; j++){
            if(j%2===0){
                answer += sArr[i][j].toUpperCase();
            } else {
                answer += sArr[i][j].toLowerCase();
            }
        }
        if(i<sArr.length-1){
            answer += " ";
        }
    }
    return answer;
}