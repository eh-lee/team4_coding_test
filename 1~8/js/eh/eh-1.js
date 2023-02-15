//https://school.programmers.co.kr/learn/courses/30/lessons/12969
//직사각형 별찍기

//1. .repeat() method로 풀기
//2. 이중 for statement로 풀기



// let text = "How are you doing today?";
// // const myArray = text.split(" "); //" " == 공백 을 기준으로 split
// // console.log(myArray);

// const myArray = text.split(" ", 3); // > ['How', 'are', 'you'] ("",n) n개의 인덱스만 만듦!!
// // const myArray = text.split("");
// // const myArray = text.split("o");
// console.log(myArray);

// let text2 = ["*"*1000]
// console.log(text2);


// let star = "*"
// let stars = () => 
// for (i=1; i<stars.length; i++){

// }
//     star*1000
// console.log(stars)
// console.log(star)


//1
//.repeat 메서드로 풀기

// let n = 3
// let m = 3
// let stars = "*".repeat(n);
// // console.log(stars); //>*** //이 코드를 m번 반복하면 됨. 반복? => for
// for (i=0; i<m; i++){
//     console.log(stars);
// }


//2
//for문으로 풀기


//2-1
// let data = "3 5";
// const n = data.split(" "); //" " == 공백 을 기준으로 split
// // console.log(n); // > ['3', '5']
// const a = Number(n[0]), b = Number(n[1]);
// // console.log(a); // > 3
// // console.log(b); // > 5
// let star = ""; // star는 일단 공백이 기본값인데 str 형식이므로. "";
// for (i=0; i<a; i++){ //반복 돌릴 거다. a번 만큼. 무엇을? 이 아랫 줄에 적힐 프로퍼티를.
//     star = star + "*";
//     console.log(star); //포문 과정 값이 다 찍히고 > * , > **, > ***
// }
//     console.log(star); //포문 다 돌린 최종값만 찍히고 > ***

// //그러면 일단 가로 * 만들었다. 세로 별을 만들어야 하는데, 가로별을 만든 후의 결과값
// // 60라인의 형식을 b번 반복하면 되겠쥬?
// // 반복? 포문 한 번 더.
// // 어떻게? 이중 포문으로 
// // => //2-2로


//2-2
// let data = "3 5";
// const n = data.split(" ");
// const a = Number(n[0]), b = Number(n[1]);
// let star = "";
// for (i=0; i<a; i++){
//     star += "*";
// };
// // console.log(star); // > ***  이제 이걸 반복 또 돌린다.
// for (j=0; j<b; j++){
//     console.log(star);
// };


//2-3
//지금 풀이한 for구문을 좀 더 깔끔하게 해 보면?
let data = "3 5";
const n = data.split(" ");
const a = Number(n[0]), b = Number(n[1]);
let star = "";
    for (i=0; i<a; i++){
        star += "*";
    } for (j=0; j<b; j++){
        console.log(star); //>> 5 * "***"
    };

//끝!