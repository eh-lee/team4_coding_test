// //https://programmers.co.kr/learn/courses/30/lessons/12901
// //2016년


// //드디어 .map() 을 써 보자
// //map()은 지도처럼 쫙 한 번 돌리는 겨!
// //map()실습

// // //1
// // let arr1 = [3, 65, 432, 4];
// // console.log(arr1.map(x => x *2)); //> [6, 130, 864, 8]



// // //2
// // var kvArray = [
// //   {key:1, value:10},
// //   {key:2, value:20},
// //   {key:3, value: 30}];

// // var reformattedArray = kvArray.map(function(obj){
// //   var rObj = {};
// //   rObj[obj.key] = obj.value;
// //   //??..객체의 인덱스를 표현하는 방법?
// //   return rObj;
// // });

// // console.log(reformattedArray); //> [{1: 10}, {2: 20}, {3: 30}]



// //그리고 toString()?


 
// //하...



// //3
// //일단 할 수 있는 것을 하기

// let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// //일단 패스..


// // ---------------------------------------------------
// //230217 re
// //이중 for문으로 i에서 Month j에서 day?
// //마지막에 반환할 때 number Or number-1이 arr[i]겠네

// //1/1 금  day[5]
// //1/2 토 day[6]
// //1/3 일 day[0]
// //1/4 월 day[1]


// // let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// // if a=5 -> 




// // function solution(a, b) {
// //     var answer = '';
// //     let count = 0;

// //     let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// //     let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
// //     //1월1일은 금요일

// //     for (let i = 0; i<a-1; i++){
// //         count += month[i]
// //         console.log(count);
// //         //31 + 30 + 31 + 30 =121  4월 말일까지 다 가면 이거죵
// //         //1이 금이지? 그러면 121을 7로 나눠서 어쩌구 하면 그게 121일째인 날, 그러니까 5월1일이든
// //         //4월 30일이든 정확히는 모르겠지만 그날의 day도 %7 이용해서 구할 수 있겠쥬?
// //         //그치만 며칠인지도 더해야 4/30인지 5/1인지의 요일이 아니라 5월 0+b일이 먼지도 알겠죠?
// //         //그래서 84라인 
// //     }
// //     count = count + b;
// //     console.log(count); //> 121(4월까지 꽉)+24(일)) = 145

// //     let filDate = count % 7;
// //     console.log(filDate); //>5네요 그러면 이게 day[5]로 가겠쥬? wed나왔는데 5/24는 tue니까
// //                             // [filDate-1]로 교정해 줍시다 90라인
// //     answer = day[filDate-1];
// //     console.log(answer); //> TUE 끝.

// //     return answer;
// // }




// //1차
// //에러 (5, 26) undefined
// //(2, 25) (3,24)
// //3,3 3,10 3,17 3,24
// //7 공차로 오키오키 하나가 비네

// // function solution(a, b) {
// //     var answer = '';
// //     let count = -1; //아 b의 최솟값이 1이니까 count -1 해도 0번 인덱스.
// //                     //1/1은 그때부터 0번인덱스부터 시작해야지

// //     let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// //     let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
// //     //1월1일은 금요일

// //     for (let i = 0; i<a-1; i++){
// //         count += month[i]
// //         console.log(count);
// //     }
// //     count = count + b
// //     console.log(count);

// //     let filDate = count % 7;
// //     console.log(filDate); //>5네요 그러면 이게 day[5]로 가겠쥬? wed나왔는데 5/24는 tue니까
// //                             // [filDate-1]로 교정해 줍시다 90라인
// //     console.log(filDate);//> 0이 나오네 아  //[filDate-1] -1 없애기로 수정 131라인
// //     answer = day[filDate];
// //     console.log(answer);

// //     return answer;
// // }



// //최종
// function solution(a, b) {
//     var answer = '';
//     let count = -1;
//     let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

//     for (let i = 0; i<a-1; i++){
//         count += month[i]
//     }
//     count = count + b

//     let filDate = count % 7;
//     answer = day[filDate];

//     return answer;
// }




// 2016년 a월 b일이 무슨 요일인지 구하기



// 1년 = 12달 = 365일
//1/1 
// 5월 24일 화요일이다
//365일
//1. 5월 24일 어쨌든 하나의 인덱스, 이 인덱스를 기준으로 1/1의 인덱스 밸루(날짜)를 구하면
//시작점을 알 수 있으니까 인덱스의 각각의 값들 어떻게 구성되는지 식을 만들 수 있다!
// 1/1(금~ index 0) 토 일 월 화 수 목 ... 12/31(365%7 index 364)

// 1월 1일~ 31일까지 2월 1일~28일 ... 12월 1~31일
// month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//
//month.length = 12
//모든 인덱스의 밸루를 합친 값은 365

// 2월 5일은 며칠?
//1월1일~1월31일까지 다 지났고 + 5일 = 2월 5일

//month[0] + 5 = 36-1%7 = 1월1일의 요일이 =   
//1월 1일이 금요일, 1월 8일 금 1월 15일 금 1월 22 29 2월 5일 금요일
//let 요일
//Date = [FRI, SAT, SUN, MON, TUE, WED, THU]; //1월 1일이 금요일이라는 가정 하에


//
//재혁님이랑 pair
//a=5 b=24

function solution(a, b) {
    var answer = '';
    let count = -1;
    let day = 0;
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    date = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

    for (i=0; i<a-1; i++){
        count += month[i]
        // -1 = -1 + 31
        // count = count + month[0]
        // count = 0 + 31
        console.log(count);
    } 
    count += b; // 5월 24일이 일 년 중 몇 번째 날인지
    // 30 + 1 = 31
    console.log(count);

    console.log(count%7); // 4 = 화요일 Date[4]
    // 31 % 7 = 3
    day = count%7 // Date[4]
    answer = date[day]
    // console.log(answer);
    return answer;

}