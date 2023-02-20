function solution(str){
    let answer = 0;
	let array= (str.split("X")).filter(a=> a!=='');
    array.map( b => answer += (b.length)/2*(b.length+1) )

	return answer;
}

let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))
