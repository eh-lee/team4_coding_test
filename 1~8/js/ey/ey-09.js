// 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948
/* 
function solution(phone_number) {
    var answer = '';
    
    let number = phone_number.slice(-4);
    let theOther = Array.from( phone_number.replace(number,'') );
    let star = "";
    for (let i = 0; i<theOther.length; i++) {
        star = theOther[i].toString();
    }
    console.log(star);
    
    
    return answer;
} 
*/




/* 
function solution(phone_number) {
    var answer = '';
    
    let number = phone_number.slice(-4);
    let theOtherNumber = phone_number.filter(num => num !== number);
    
    console.log(theOtherNumber);
    
    return answer;
}
 */
// filter가 안됨. 왤까? number가 배열이라서?

// 이것도 안됨 ㅠ
//let theOtherNumber = phone_number.filter(x => !number.includes(x));



function solution(phone_number) {
    var answer = '';
    
    let number = phone_number.slice(-4);
    let theOtherNumber = phone_number.replace(number,'');
    let star = theOtherNumber.replace(/[0-9]/g,'*');
    
    answer = star + number;

    return answer;
}
/* repeat 활용해서 풀기 
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }
 */

// 두번째 풀기

function solution(phone_number) {
    var answer = '';
    let num = '';
    let star = '';
    
    num = phone_number.slice(-4);
    star = '*'.repeat(phone_number.length - 4)
    
    answer = star + num
    
    return answer;
}