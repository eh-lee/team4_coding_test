// //https://teamsparta.notion.site/99-13-f6dc48e0230d4195828682c97da235dc
// //1. 신대륙 발견


// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 11 27 -> "3월 5일"
// 6 22 -> "9월 28일"
// 1 18 -> "4월 26일"


// //항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘
// //a월 b일을 준다 
// //a월 b일이 일년의 몇 번째 날인지 카운트 한 후
// //+ 98
// //1 18 -> 4 26
// // 0 + 18

// function solution(a, b){
//     let answer = "";
//     let count = 97;
//     let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let day = 0;
//     let lunar = 0;

//     for (let i = 0; i< a; i++){
//         console.log(count);
//         count += month[i] + b;
//         console.log(count);
//     }
//     //solution(1,18)
//     //1. 일 년 중 며칠 차 되는 때에 끝나는지 구했다.
//     //147 - 31 - 28 - 31 -30 > 0  까지 빼네
//     //count>0까지

//     for(let j=0; j<month.length; j++){
//         if(count - month[j] > 0 ? count -= month[j] : count)
//         day = count;
//         lunar = j+1;
//     }
//     console.log(day);
//     console.log(lunar); //> 11+1이 나오네 4가 아니라
    
//     return answer = lunar + "월 " + day + "일";
// }

// //+98일이 되는 날의 월과 일 구하기
// // 다음 해로 넘어가는 것도 컨트롤 필요.
// // count 





//2.
//Date()
//new Date(), getDate(), setDate();
//https://www.freecodecamp.org/korean/news/how-to-format-dates-in-javascript/

//soulution(1, 18) //> 4월 26일

// function solution(a, b){
//     let date = new Date(2023, 1, 1);
//     console.log(new Date());

//     let yesterday = new Date(date.setDate(date.getDate() - 1))
//     console.log(yesterday);
// }



// // yesterday.setDate(today.getDate() - 1);
// // console.log(yesterday);


// const today = new Date(2021, 3, 30);

// const nextDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 1
// );

//  // 2021년 5월 1일
// console.log(nextDate);

// // let answer = + "월 "+ "일";


//최종
function confetti(month, day){
    let answer = "";
    let entry = new Date(2023, month-1, day); //기준 일자
    entry.setDate(entry.getDate() + 98); //졸업 일자
    let graduation = entry;    
    let lunar = graduation.getMonth()+1;
    let date = graduation.getDate();
    let graduYear = graduation.getFullYear();
    return answer = lunar + "월 " + (graduYear % 4 == 0 ? entry.getDate()+1 : entry.getDate()) +"일";
}
// console.log(solution(1, 18));