// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));




const items = ['item1', 'item2', 'item3'];
const copy1 = [];
const copy2 = [];

// 이전
for (let i=0; i<items.length; i++) {
  copy1.push(items[i]);
}
console.log(copy1);

// 이후
items.forEach(function(item){
  copy2.push(item);
});
console.log(copy2);