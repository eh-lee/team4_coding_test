//프로그래밍 기초문제 3.가운데 글자 가져오기
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
//s는 길이가 1 이상, 100이하인 스트링입니다.

//내 풀이
function solution(s) {
    var answer = ''; 
    for (let i = 0; i < s.length; i++);
        if (s.length % 2 == 0)
            answer = 

//for문은 저기서 의미가 없다. 왜 썼는지?? 이제 짝수 홀수 구하는 것은 이해가 간다 하지만 
//가운데 글자를 반환한다는게 이해가 가지 않았다. 글자 수가 정해져있으면 내가 배열번호 지정하여
//할 수 있겠지만, 이 경우는 어떻게 하는지 전혀 감이 오지 않았다.



//풀이
function solution(s) {
    var answer = ''; 
      if (s.length %2 == 0) { //s 의 길이가 짝수일 때 
      answer = s[s.length / 2 - 1] + s[s.length / 2]
        // s 길이의 반 - 1 값에 해당하는 index 값 + s 길이의 반 값에 해당하는 index 값
    } else { //s 의 길이가 홀수일 때
      answer = s[Math.floor(s.length/2)] // s 길이의 반 값에서 반내림한 index 값
    }
    return answer;
}

//무언가 특별한 기능, 함수를 사용하여 풀어야 할 줄 알았는데 Math.floor을 제외하고는 내가 배운 함수들을 사용해서
//풀 수 있는 점 깨달았다. 더욱 고민하고 연습해보아야겠다.
// *Math.floor()메서드를 사용해 반내림을 해주어야 한다. 반올림이 아닌 반내림을 하는 이유는 인덱스는 0부터 시작하기 때문이다.

//다시 풀기
function solution(s) {
    var answer = '';
    if(s.length % 2 == 0) {
    answer = s[s.length/2 - 1] + [s.length/2] 
    } else {
    answer = s[Math.floor(s.length/2)]
}
    return answer;
}