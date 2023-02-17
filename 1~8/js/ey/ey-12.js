// 부족한 금액 계산하기
//
/* 
function solution(price, money, count) {
    var answer = -1;

    return answer;
}
 */
// 제일 처음 드는 생각은 왜 answer=-1일까?



/* 
function solution(price, money, count) {
    var answer = -1;
    
    let totalPrice = 0;
    for (let i = 0; i <= count; i++) {
        totalPrice += price * i;
    }
    
    if(money < totalPrice) {
        answer = totalPrice - money;
    } 
    
    return answer;
}


function solution(price, money, count) {
    var answer = -1;
    
    let totalPrice = 0;
    for (let i = 0; i <= count; i++) {
        totalPrice += price * i;
    }
    
    if(money < totalPrice) {
        answer = totalPrice - money;
    } else (money >= totalPrice) {
        answer = 0;
    }
    return answer;
}

 */



function solution(price, money, count) {
    var answer = 0;
    
    let totalPrice = 0;
    for (let i = 0; i <= count; i++) {
        totalPrice += price * i;
    }
    
    return answer = money < totalPrice ? totalPrice - money : 0;
}

/* 
    if(money < totalPrice) {
        answer = totalPrice - money;
    } else if (money >= totalPrice) {
        answer = 0;
    }
    
    return answer; */


/* 
//서윤님 코드
function solution(price, money, count) {
for(let i = 1; i <= count; i++) {
money = money - i * price
}
if( money > 0 ) {
return 0
} else {
return - money
}
}
 */


/* 

//다른 방법으로 시도
// (3*1)+(3*2)+(3*3)+(3*4) = 3(1+2+3+4)를 표현하고 싶었어 ㅠ

    function solution(price, money, count) {
        var answer = 0;
        
        let countAll = 0; 
        for(let i=0; i<=count; i++); {
            countAll = i;
        }
        console.log(countAll)
        
        
    //     let totalPrice = n * countAll.reduce()
        
    //     return answer;
    }
     */

// 근데 포기 ㅎ
// 가우스 공식으로 써야한다고 함ㅎㅎ 

//동찬님 코드
/* 
function solution(price, money, count) {
    let startpoint = 0
    do{
    startpoint+=count
    count--
    }while(count > 0)
    return money > startpoint*price ? 0 : startpoint*price - money
    }
 */