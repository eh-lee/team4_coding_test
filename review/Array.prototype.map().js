const arr1 = [1, 4, 9, 16];

// Pass a function to map
const arr1Double = arr1.map(a => a * 2);
// const map1 = arr1.map(sthWhatever => sthWhatever * 2);
console.log(arr1Double);//> [2, 8, 18, 32]

var numbers = [1, 4, 9];
var doubles = numbers.map(function(anythingElse) {
  return anythingElse * 2;
});
console.log(doubles);

const arr2 = [3, 4, 5, 6];

//map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

const arr2Str = arr2.map(a => a + "");
console.log(arr2Str); //> ['3', '4', '5', '6']
console.log(arr2); //> [3, 4, 5, 6]


var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots); //> [1, 2, 3];


let arr3 = ['14', '322', '663'];
let intArr3 = arr3.map(str => parseInt(str));
console.log(intArr3); //> [14, 322, 663]
let numArr3 = arr3.map(Number);
console.log(numArr3); //> [14, 322, 663]