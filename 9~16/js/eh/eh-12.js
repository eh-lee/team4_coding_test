//https://school.programmers.co.kr/learn/courses/30/lessons/82612
//부족한 금액 계산하기


//먼저 price && count
// let price = 3;
// let count = 4;
//// let answer = 0;
// let need = 0;

// function priceSum(price, count){

//     for(i=0; i<=count; i++){
//         price += price*i;
//         console.log(price);
//         // return price
//     }
//}
// console.log(answer);

// console.log(priceSum());


// let price = 3;
// let count = 4;
// let need = 0;


// for(i=0; i<=count; i++){
//     need += price*i;
// }
// console.log(need); //> 30



//3

// function solution(price, money, count) {
//     let need = 0;
  
//     for (let i = 1; i <= count; i++) {
//       need += price * i;
//     }
//     // console.log(need);
  
//     return need > money ? need - money : 0;
// }
  
// console.log(solution(3, 20, 4)); //>10




//최종

function solution(price, money, count) {
    let need = 0;
  
    for (let i = 1; i <= count; i++) {
      need += price * i;
    }
    
    return need > money ? need - money : 0;
}