// // 3번. 소수의 개수와 덧셈 (상)
// // ### **문제 설명**

// // 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// // str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// // 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// // ### 제한사항

// // - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// // - 문자열에는 소수가 한개 이상 섞여 있습니다.
// // - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// // - 음수는 없습니다.x

// s="2 3 4 5";
// let arrNum = s.split(" ");
// console.log(arrNum);
// console.log(typeof(Number(arrNum[0])));
// //1. let x = 소수의 최대값 
// //2. let y = 소수가 아닌 수의 최소값
// // "x y"
// let x = [];
// //소수

// function isPrime(num) {
//     // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
//     // num > i
//     for(let i = 0; i<arrNum.length; i++) {
//         const isPrime = (Number(arrNum[i])) => {
//             for (let i = 2; i < arrNum[i]; i++) {
//               if (arrNum[i] % i === 0) {
//                 x += arrNum[i];
//                 console.log(x);
//               }
//             }
//             console.log(x);           
//         }
//     }
// }  
      
// //         if(Number(arrNum[i]) % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
// //         x += arrNum[i];
// //         console.log(x);
// //      }
// //     }
// //    // 소수는 1보다 큰 정수임으로
// //    // 1보다 작으면 false를 리턴한다
// //    return num > 1;
// //   }

// //내일 다시
// s="2 3 4 5";
// let arrNum = s.split(" ");
// console.log(arrNum);
// console.log(Number(arrNum[0]));
// let x = [];

// function solution(){

// }



// for(let n = 0; n<arrNum.length; n++) { //i = 0 i<4 i++
//         for (let i = 1; i < Number(arrNum[i]); i++) {
//             if (Number.isInteger(arrNum[i])) {
//                 x += Number(arrNum[i])
//                 console.log(x);
//             }
//             console.log(x);
//         }
//         console.log(x);
//     }
//     console.log(x);
//     // return true;

// //소수 구한 것들 빼서 배열 푸쉬 만들고
// //else 는 다른 변수에 담고
// //arrElse -> Math.min(a,b)
// //arrPrime -> Math.max(a,b)
// //answer = 


// let s="2 3 4 5";
// let arrNum = s.split(" ");
// let arrPrime = [];
// let maxPrime = 0;
// let arrRest = [];
// let minRest = 0;
// let answer = "";



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

//     for(let i = 0; i<arrNum.length; i++) {
//         if (isPrimeNumber(arrNum[i]) === true){
//             arrPrime.push(Number(arrNum[i]));
//             console.log(arrPrime); //> [2, 3, 5]
//             console.log(typeof(arrPrime[0])); //> num
//             maxPrime = Math.max(...arrPrime);
//             console.log(maxPrime); //> 3
//         } else {
//             arrRest.push(Number(arrNum[i])); // [4]
//             console.log(arrRest);
//             minRest = Math.min(...arrRest);
//             console.log(minRest); //> 4
//             console.log(typeof(minRest)); //> num
//         }
//         answer = minRest + " " + maxPrime;
//         console.log(answer);
//         console.log(typeof(answer));
//     }
//     return answer;
// }


//최종


function solution (s){
    let arrNum = s.split(" ");
    let arrPrime = [];
    let maxPrime = 0;
    let arrRest = [];
    let minRest = 0;
    let answer = "";

    function isPrimeNumber(n){
        if(n==1) return false;
        for(let i=2; i<n; i++){
            if(n%i==0) return false;
        }
        return true;
    }

    for(let i = 0; i<arrNum.length; i++) {
        if (isPrimeNumber(arrNum[i]) === true){
            arrPrime.push(Number(arrNum[i]));
            maxPrime = Math.max(...arrPrime);
        } else {
            arrRest.push(Number(arrNum[i]));
            minRest = Math.min(...arrRest);
        }
        answer = minRest + " " + maxPrime;
    }

    return answer;
}
let s ="97 75 88 99 95 92 73";

console.log(solution(s));