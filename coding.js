// function step1(error, script){
//     if(error){
//         handleError(error);
//     } else {
//         console.log('well');
//     }
// }

// function step2(error, script){
//     if(error){
//         hadleError(error);
//     } else {
//         console.log('well');
//     }
// }

// function step3(error, script){
//     if(error){
//         handleError(error);
//     } else {
//         console.log('well')
//     }
// }


// showCircle(150, 150, 100, div =>{
//     div.classList.add('msg-ball');
//     div.append("hi!");
// });

// let promise = Promis.all([...promises...]);

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))
// ]).then(alert);



// //promis chaining
// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// });


// const a = 'age';
// const user = {
//     name : 'Mike',
//     [a] : 30
// }
// console.log(user);

// const newUser = Object.assign({}, user);
// //빈 객체 {} 에 identifier user인 객체가 들어간다!
// console.log(newUser);

// newUser.name = 'Tom';
// console.log(newUser);
// console.log(user);
// if (newUser !== user){
//     console.log('newUser와 user는 다르다');
// }

// const user2 = {
//     name : 'Mike',
// }
// const info1 = {
//     age : 30,
// }
// const info2 = {
//     gender : 'male',
// }

// Object.assign(user2, info1, info2);
// console.log(user2);

// console.log(Object.keys(user2));
// console.log(Object.values(user2));
// console.log(Object.entries(user2));
// console.log(user2);

// const arr =
// [
//     ["name", "Mike"],
//     ["age", 30],
//     ["gender", "male"]
// ];
// const objArr = Object.fromEntries(arr);
// console.log(objArr);


//함수 선언문 //함수를 직접 선언 ! 
//호이스팅되기 때문에 어디서든 호출 가능
//신경 쓰기 싫으면 함수 선언문으로 !!

// sayHello();

// function sayHello(){
//     console.log('hello');
// }



// //함수 표현식 함수를 변수에 담아 표현
// //코드에 도달하면 생성

// let sayHello2 = function(){
//     console.log('hello');
// }
// sayHello();



// //화살표 함수

// let add = function(num1, num2){
//     return num1 + num2;
// }
// console.log(add(1, 2));

// let add2 = (num1, num2) => (num1 + num2);
// let add3 = (num1, num2) => num1 + num2;
// let add4 = name => `hello ${name}`

// console.log(add2(1,4));
// console.log(add3(5,4));
// console.log(add4('eh-lee'));

// let add5 = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }
// console.log(add5(24524,2524));


// showError();

// function showError(){
//     console.log('error');
// } 


// //함수표현식의 경우 레퍼런스 에러(const, let) 뜨지. 왜? 호이스팅이 안 되니까.
// //var로 하면 레퍼런스 에러는 안 뜨는데 타이브 에러가 뜰 거야.
// //왜? 호이스팅은 되는데 indetifier만 호이스팅 되니까.

// // showError2();
// const showError2 = function(){
//     console.log('error');
// }

// const sayHello5 = function(name){
//     const msg = `hello, i'm ${name}`;
//     return msg;
// }
// console.log(sayHello5('eh-lee'));


// const sayHello6 = (name, age) => {
//     const msg = `hello, i'm ${name}, and i'm ${age} years old`;
//     return msg;
// }
// console.log(sayHello6('eh-lee', 32));


// //

// const name = 'eh-lee';
// const age = 32;

// const winner = {
//     name,
//     age,
//     gender: 'male',
// }

// console.log(Object.assign(winner));
// console.log(winner.birthday);
// console.log('birthday' in winner);
// console.log('name' in winner);
// console.log(winner.age);
// console.log(winner.name);
// winner.hairColor = 'black';
// console.log(winner.hairColor);
// delete winner.age;
// console.log(winner);

// //

// function makeObj(name,age){
//     return {
//         name,
//         age,
//         hobby: 'football'
//     }
// }

// const Mike = makeObj('Mike', 30);
// console.log(Mike);
// console.log('age' in Mike);



// const winner = {
//     name: 'eh-lee',
//     age: 32,
//     fly(){
//         console.log(`${this.name} is flying!`)
//     }
// }

// console.log(winner.fly());


// const user = {
//     name : 'mike',
//     sayHello(){
//         console.log(`${this.name} is happy!`)
//     }
// }
// console.log(user.sayHello());


// let boy = {
//     name: 'mike',
//     sayHello(){
//         console.log(this); // {name: 'mike', sayHello: ƒ}
//         console.log(`Hello, I'm ${this.name}!`) //Hello, I'm mike!
//     }
// }
// console.log(boy.sayHello());

// let girl = {
//     name: 'merry',
//     sayHello: ()=> {
//         console.log(this); //window
//         console.log(`Hello, I'm ${this.name}!`) // Hello, I'm !
//     }
// }
// console.log(girl.sayHello());
// console.log(girl.sayHello(this)); //undefined

// //화살표 함수는 this를 가지지 않는다 따라서 전역객체 window를 갖는다
// //화살표 함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져온다


//var 는 호이스팅. 선언만 호이스팅. 할당은 호이스팅 안 됨. 즉
//식별자만 호이스팅되고 밸루는 안 됨. 고로 undefined
//let과 const도 호이스팅 되지만 undefined가 아니라 ref error나옴

// let age = 30;

// function showAge(){
//     console.log(age);
//     // let age = 20; //ref. error Temporal Dead Zone
//     //hoisting은 스코프 단위로 일어남.
// }

// showAge();


// //var는 선언과 초기화가 같이 되기 때문에 undefined



//object literal

// let user = {
//     name : 'Mike',
//     age : 30,
// }


// //생성자 함수는 첫 글자를 Uppercase로
// //객체 리터럴을 일일이 쓸 필요가 없게 된다!
// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         console.log(`Hi! I'm ${this.name}!`);
//     }
// }

// let user1 = new User('Mike', 30);
// let user2 = new User('Mike.jr', 32);
// let user3 = new User('Mike.sr', 29);

// let user4 = Object.assign({}, user);
// console.log(user4);

// console.log(Object.assign(user1));
// console.log(user2);
// console.log(user3);
// user3.sayName(); //Hi! I'm Mike.sr!


// function Item(title, price){
//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`${title}의 가격은 ${this.price}원 입니다!`);
//     }
// }

// let item1 = new Item('desk', 400000);
// item1.showPrice();


const obj = {
    1: '1입니다',
    false: '거짓'
}

//symbol은 유일한 식별자를 만들 때만 사용한다. 전체 중 하나.
//유일한 프로퍼티를 추가하고 싶을 때 사용 !
const a = Symbol();
const id = Symbol('id'); //parameter는 설명

const user = {
    name : 'Mike',
    age : 30,
    [id] :'myid'
};

const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
};

//사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`);
}

console.log(user); //{name: 'Mike', age: 30, Symbol(id): 'myid'}
console.log(Object.keys(user)); //symbol 형은 건너뛴다
console.log(id.description);


//Symbol.for() 전역 심볼
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1 === id2); //true
console.log(Symbol.keyFor(id1)); //>id
console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));