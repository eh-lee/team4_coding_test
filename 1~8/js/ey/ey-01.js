//직사각형 별찍기 (https://programmers.co.kr/learn/courses/30/lessons/12969)


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {

    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (let i = 0; i < b; i++) {
        let star = "";
        for (let j = 0; j < a; j++) {
            star = star + "*"
        };
        console.log(star);
    };
});

// 두번째로 풀었을 때!
/* 
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = '';
    for (let i=0; i<b; i++) {
        star = '';
        for(let j=0; j<a; j++) {
            star += "*";
        } console.log(star)
    }
});
 */


// 이런 방법도 있군!!
/* 
process.stdin.setEncoding('utf8');
const n = data.split(" ");
const a = Number(n[0]), b = Number(n[1]);
process.stdin.on('data', data => {
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

}); 
*/