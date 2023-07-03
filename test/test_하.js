// //거스름돈 개수 가장 적게 잔돈
// //500 100 50 10
// //1000 - checkIn = //680 // 500 100 50 10 10 10  length = 6

// function solution(checkin){
//     let checkin = 320;
//     let change = 1000 - checkin;
//     console.log(change);
//     let arrChange = [];
//     let count = 0;
//     let change1 = 0;
//     let change2 = 0;
//     //680일 경우
// if (change >= 500){
//     let i = 1;
//     while (i < 3 && change < 500){
//         change = change - 500;
//         console.log(change);
//         count += 1;
//         console.log(count);
//         i++
//     }
// }


// function solution(checkin){

// // let checkin = 320;
// let change = 1000 - checkin;
// console.log(change);

// let c500, c100, c10;

// console.log(change%500); // 180
// c500 = (change - (change % 500)) / 500;
// console.log(c500); //500이하일 때는 0
// change -= 500*c500;
// console.log(change); //180
// console.log(c500);//1


// c100 = (change - (change % 100)) / 100;
// console.log(c100);
// change -= 100*c100;
// console.log(change);

// c10 = (change - (change % 10)) / 10;
// console.log(c10);
// change -= 10*c10;
// console.log(change);

// let count = 0;
// count = c500 + c100 + c10;
// console.log(count);
// return count;
// }
// //     // for (let i = 1; i<3; i++){
// //     //     change = change - 500;
// //     //     console.log(change);
// //     //     count += i;
// //     //     console.log(count);
// //     //     break;
// //     // }
// //     // let change1 = change;
// //     // console.log(change1);
// //     if (change >= 100){
// //         while (change < 100){
// //         change = change - 100;
// //         console.log(change);
// //         count += i;
// //         console.log(count);
// //         }
// //         // for (let i = 1; i<5; i++){
// //         //     change = change - 100;
// //         //     console.log(change);
// //         //     count += i;
// //         //     console.log(count);
// //         //     break;
// //     }
// //         // if (change >= 10){
// //         //     for (let i = 1; i<10; i++){
// //         //         change = change - 10;
// //         //         console.log(change);
// //         //         count += i;
// //         //         console.log(count);
// //         //         break;
// //         //     }
// //         // }
// //     }


// // // if (change >= 490){
// // //     for (let i = 1; i<5; i++){
// // //         change = change - 100;
// // //         console.log(change);
// // //         count += i;
// // //         console.log(count);
// // // }
// // // }



//하 최종

function solution(num){
    let change = 1000 - num;
    let answer = 0;   
    let c500 = 0;
    let c100 = 0;
    let c50 = 0;
    let c10 = 0;
    
    c500 = (change - (change % 500)) / 500;
    change -= 500*c500;

    c100 = (change - (change % 100)) / 100;
    change -= 100*c100;

    c50 = (change - (change % 50)) / 50;
    change -= 50*c50;
    
    c10 = (change - (change % 10)) / 10;
    change -= 10*c10;
    
    answer = c500 + c100 + c50 + c10;

    return answer;
}
let num1 = 160;
console.log(solution(num1));