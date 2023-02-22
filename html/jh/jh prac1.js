//프로그래밍 기초문제 1.직사각형 별찍기
//https://school.programmers.co.kr/learn/courses/30/lessons/12969
//이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
//n과 m은 각각 1000 이하인 자연수입니다.

//내 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(); {
        n < +1000;
    }
    const a = Number(n[0]), b = Number(n[1]);
    console.log(a);
    console.log(b);
});
우선 문제 자체를 이해하지 못하였다. 별문자를 이용하라는 말이 이해가 가지 않는다.

//풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
let result = "";

for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
        result += '*';
    }
    result += '\n'
}
console.log(result);
});



