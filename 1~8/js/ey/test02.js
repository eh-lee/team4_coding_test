function solution(str){
    let answer = 0;
	let array= (str.split("X")).filter(a=> a!=='');
    array.map( b => answer += (b.length)/2*(b.length+1) )

	return answer;
}

let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))


// 가우스의 공식 함수
/* 
function sum(n){
    let result = 0;
    for(let i=0; i<=n; i++) {
        result +=i;
    }
    return result;
}
 */