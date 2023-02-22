//프로그래밍 기초문제 13.2016년
//https://school.programmers.co.kr/learn/courses/30/lessons/12901

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
    command + L + O
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