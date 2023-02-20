// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    
    let sArr = s.split(' '); 
    let word = '';
    
    for (let i=0; i<sArr.length; i++) {
        word = sArr[i].split('');
        
        for (let j=0; j<word.length; j++) {
            if (j%2===0) {
                word[j] = word[j].toUpperCase();
            } else {
                word[j] = word[j].toLowerCase();
            }
        } sArr[i] = word.join('')
    }
    return sArr.join(' ');
}

/* 
    function toWeirdCase(s){
        var str = '';
        var arr = s.split(' ');

        for(var i in arr){
            for(var j=0; j<arr[i].length; j++){
                var t = arr[i][j]; 
                str += (j % 2 === 0) ? t.toUpperCase() : t.toLowerCase();
            }
            str += ' ';
        }
        return str.slice(0, str.length-1);
    }
    console.log("결과 : " + toWeirdCase("try hello world"));
*/