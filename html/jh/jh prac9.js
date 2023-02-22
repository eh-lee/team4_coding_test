//프로그래밍 기초문제 8.핸드폰 번호 가리기
/* 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
phone_number는 길이 4 이상, 20이하인 문자열입니다. */

//내 풀이
function solution(phone_number) {
    let answer = '';
    let arr = phone_number.split("", (phone_number.length - 4)); // split로 하나하나 쪼개고, length -4하여 뒷 4자리 빼고 불러오는 것 의도)
    arr= "*".repeat(arr); //뒤에 4자리 빼고 수 불러서 repeat이라는 함수 검색해서 한 번 시도해보았다. *로 바꿔주기 위해 사용
    answer = arr + (phone_number.slice - 4); // 그리고 별표한 것과 뒷 4자리 붙이려 많이 고민 하였다. 도저히 떠오르지 않아 slice라는 함수 써서 뒷4자리 따로 뺴기
    
    console.log(answer)[1234567890]

    return answer;
}
// for문을 돌려서 할까 하다가 split이라는 매소드가 갑자기 떠올라 그걸 활용해보려고 하였다. 그렇지만 오류가 났다. 정확한 원인을 찾지 못하여
//답안 예문을 보았다.

//답안예시

function solution(phone_number) {
    // "*"을 phone_number의 길이에서 4만큼 뺀 횟수만큼 반복한 문자열과
    // phone_number의 -4인덱스부터 끝까지 추출한 문자열을
    // 이어붙인 후 반환
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  }
  //간단하다. repeat매소드 및 slice 활용한 방법이다. 해당 매소드 잘 기억해두기.