let s = "2 3 4 5";

function solution(s){
	
	let answer="";
	let str = s.split(" "); // ['2', '3', '4', '5']
	let primeNum = [];
	let num = [];

	for (let i=0; i<str[i]; i++) {
		primeNum = []; 
		if(str[i]%i===0) {
			num.push(str[i])
		} else {primeNum.push(str[i])}
	}
	

	console.log(b);
	
    


	// return answer;
    

}

console.log("답" + solution(s));