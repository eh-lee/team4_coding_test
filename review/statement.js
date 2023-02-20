//break
//break 문은 현재 반복문, switch 문, 또는 label 문을 종료하고,
//그다음 문으로 프로그램 제어를 넘깁니다.

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log(i); //> 3



//continue
//continue 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서
//명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.
//지정한 거 패스하고 이어서

//1
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);//> 012456789



//2
var j = 0;
var n = 0;

while (j < 5) {
  j++;

  if (j === 3) {
    continue;
  }

  n += j;
  console.log(n); //> 1 3 7 12
}