// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

/* 
while (num!==1) {
    if (num%2===0) {
        num = num / 2;
        count++;
    } else if(num%2!==0) {
        num = (num * 3) + 1;
        count++;
    }
}

if (num===1) {
    count = 0;
} else if (count>=500) {
    count = -1;
}
return count;
 */
// 틀림 ㅠ


function solution(num) {
    let count = 0;
    
    if(num===1) {
        return count;
    }
    
    while(num!==1) {
        if (count>=500) {
            return count = -1;
        } else if (num%2===0) {
            num = num / 2;
            count++;
        } else if (num%2!==0) {
            num = (num * 3) + 1;
            count++;
        }
    }
    return count;
}