//https://school.programmers.co.kr/learn/courses/30/lessons/42576
//완주하지 못한 선수

//한 명 제외 전부 완주
//participant = [...name];
//completion = [name];
//return answer = completion[0];
//배열의 인덱스 비교
//정렬한 후 하면? sort()? 

//교집합 arr1.filter(x => arr2.includes(x));
//차집합 arr1.filter(x => !arr2.includes(x));



//1 filter()> 실패
//원인 : 동일한 값이 중복될 때 함께 처리됨 ->undefined
//solution(["leo", "kiki", "eden"], ["eden", "kiki"])
// function solution(participant, completion) {
//     var answer = '';
//     // return answer;
//     console.log(participant.filter(x => !completion.includes(x))); //> ['leo'] 
//     // console.log(completion.filter(x => !participant.includes(x))); //> []
//     answer = participant.filter(x => !completion.includes(x))[0];
//     return answer;
// }


//solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
//이처럼 동명이인인 경우는 []이라 undefined 뜬다.
//하..




//2 sort()


// function solution(participant, completion){
//     let answer ='';
//     participant.sort();
//     console.log(participant.sort()); //>['ana', 'mislav', 'mislav', 'stanko']
//     completion.sort();
//     console.log(completion.sort()); //>['ana', 'mislav', 'stanko']
//     //이제 for문으로 하나씩 비교해서 틀릴 때 리턴?
//     for (let i = 0; i <participant.length; i++){
//         if(participant.sort()[i] !== completion.sort()[i]){
//             answer = participant.sort()[i];
//         }
//     }
//     return answer;
// // }


let participant = ['mislav', 'mislav', 'stanko', 'ana'];
let completion = ['ana', 'mislav', 'stanko'];
function solution(participant, completion){
    participant.sort();
    console.log(participant); //>['ana', mislav', 'mislav', 'stanko'];
    completion.sort();
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}

