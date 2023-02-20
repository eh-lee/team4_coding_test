// ## 중. 동그라미 엑스로 숫자를?

// "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)

// let str = "OXOOOXXXOXOOXOOOOOXO";
// let strArr = str.split("");
// let filterArr = [];
// console.log(strArr);
//x는 필요 없다
//o만 덩어리로 떼 오면 된다.
//x에 집착 ㄴㄴ

// //
// for (let i = 0; i < strArr.length; i++){
//     for (let j = 1; j < strArr.length; j++)
//     if (str[i]='O' && str[i] === str[i+j] str[i+strArr.length] ){
//         filterArr += strArr[i];
//         console.log(filterArr);
  


//     console.log(filterArr);
// }

// function solution(str){
// 	let answer= 0;
// 	return answer;
// }
// let str="OXOOOXXXOXOOXOOOOOXO";
// console.log(solution(str))


// for ( ~){
//     if(strArr[i] === O){
//         answer += 1;
//     }
//     esle (str)
// }




// let str="OXOOOXXXOXOOXOOOOOXO";

// //이거를 먼저 배열로 한 다음에
// //O X를 숫자로
// let strWithoutX = str.replace(/X/g, " ");
// console.log(strWithoutX);
// let newArr = strWithoutX.split(" ");
// console.log(newArr);
// console.log(newArr[0].length);
// console.log(newArr[2].length);
// let score = 0;


// function sum(n){
//     let result = 0;
//     for(let i = 0; i<=n; i++){
//         result += i;
//     }
//     return result;
// }

// // console.log(sum(0));
// // console.log(sum(1));
// // console.log(sum(2));
// // console.log(sum(3));

  
// for(let i = 0 ; i<newArr.length; i++){
//     score += sum(newArr[i].length);
//     // console.log(sum);
//     //length = 3, 3+2+1 = 6   length = 5, 5+4+3+2+1 = 15 펑션 하나 만들어
// }
// console.log(score);

// let strArr = str.split("");
// let newArr = [];


// // console.log(strArr);

// for (let i = 0; i < strArr.length; i++){
//     if(strArr[i] === 'O'){
//         strArr[i] = 1;
//         newArr.push(strArr[i]);
//     } else {
//         strArr[i] = 0;
//         newArr.push(strArr[i]);
//     }

//     // console.log(newArr); //> [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1]
// }
// console.log(newArr);





//최종

function solution(str){
    let strWithoutX = str.replace(/X/g, " ");
    let newArr = strWithoutX.split(" ");
    let answer = 0;

    function sum(n){
        let result = 0;
        for(let i = 0; i<=n; i++){
            result += i;
        }
        return result;
    }
  
    for(let i = 0 ; i<newArr.length; i++){
        answer += sum(newArr[i].length);
    }
return answer;
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
