function solution(num){
    let change = (1000 - num);
    let count = 0;

    if (change>=500) {
        count += Math.floor(change/500);
        change = change - (Math.floor(change/500) * 500);
    } 

    if (change>=100) {
        count += Math.floor(change/100);
        change = change - (Math.floor(change/100) * 100);
    }

    if (change>=50) {
        count += Math.floor(change/50);
        change = change - (Math.floor(change/50) * 50);
    }

    if (change>=10) {
        count += Math.floor(change/10);
        change = change - (Math.floor(change/10) * 10);
    }

    return count;
    
}
let num = 160;
console.log(solution(num))