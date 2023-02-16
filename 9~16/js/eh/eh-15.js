//https://school.programmers.co.kr/learn/courses/30/lessons/70128
//내적


// let answer = 0;

// let a = [1, 2, 3, 4]
// let b = [-3, -1, 0, 2]
// // let c = [[a[0]*b[0]], ..., [a[a.length-1]*b[b.length-1]]]
// let c = []

// for (i=0; i<a.length; i++){
//     c.push(a[i]*b[i]);
// }

// // console.log(c); //>  [-3, -2, 0, 8]
// // console.log(c[0]); // > -3
// // answer = c[0]+c[1]+c[2]+c[3] //>3
// // console.log(answer); //> 3

// let sum = 0;

// for (let i=0; i< c.length; i++){
//     sum += c[i]
// }
// answer = sum;

// console.log(sum); //> 3
// console.log(answer); //> 3




//최종

function solution(a, b) {
    var answer = 0;
    let c = [];
        
    for (i=0; i<a.length; i++){
        c.push(a[i]*b[i]);
    }

    let sum = 0;

    for (let i=0; i< c.length; i++){
        sum += c[i]
    }
    answer = sum;
    return answer;
}




//.reduce() 메서드에 대해 공부하기!