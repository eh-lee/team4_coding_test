// //JavaScrpt is synchronous
// //Execute the code block in order after hoistin
// //hoisting : Hoist 'var' and 'function declaration'

// console.log('1');
// setTimeout(() =>  console.log('2'), 1000); //async
// console.log('3');

// //Synchronous callBack
// function printImmediately(print){
//     print();
// }
// printImmediately(()=> console.log('hello'));


// //Asynchronous callBack
// function printWithDelay(print, timeout){
//     setTimeout(print, timeout); 
// }
// printWithDelay(() => console.log('async callback'), 2000); //async

// //비동기는 이처럼 문자 그대로, 브라우저의 실행에 동기화되어 호출되지 않는다는 뜻
// //timeout처럼 브라우저 실행이 끝나고 시간이 지난 뒤 호출됨. 그래서 비동기


// Callback Hell example

// class UserStorage {
//     loginUser(id, password, onSuccess, onError) {
//         setTimeout(() => {
//             if(
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'ehlee' && password === 'academy')
//             ) {
//                 onSuccess(id);
//             } else {
//                 onError(new Error('not found'));
//             }
//         }, 2000);
//     }

//     getRoles(user, onSuccess, onError){
//         setTimeout(() => {
//             if (user === 'ellie'){
//                 onSuccess({name: 'ellie', role: 'admin'});
//             } else {
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// }


// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your pw');
// userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     }, 
//     error => {
//         console.log(error);
//     }
// );

// //callback chain  ~  가독성이 떨어진다. 디버깅시 복잡하다.



//callback

// words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// // newWords = words.filter(el => el.length>6);
// // console.log(newWords); //(3) ['exuberant', 'destruction', 'present']

// function myfilter(origin, callback){
//     var result = [];
//     for (var i = 0; i < origin.length; i++){
//         var current = origin[i];
//         if(callback(current)){
//             result.push(current);
//         }
//     }
//     return result;
// }
// newWords = myfilter(words, el => el.length>6);
// console.log(newWords);


//hoisting: var, function declaration이 메모리적으로 최상단에 올라가 세팅되는 것
//synchronous ~ 정해진 순서대로 코드가 실행

console.log('1');

setTimeout(() => console.log('async callback1'), 1000);
//1초가 지난 다음에 call back해 줘! 그러므로 callback 함수.
//사실 setTimeout의 파라미터 인자 자체가 callback func임.
//setTimeout은 브라우저 api이기 때문에 queue에 있다가 추후에 콜스택으로 넘어감
//asynchronous 처리

console.log('3');


//
//Synchronous callback

function printImmediately(print){
    print();
}
printImmediately(() => console.log('sync callback1'));
//함수의 선언이니까 호이스팅할 때 맨 위로 가겠지
//비동기보다 먼저되지 당연히 비동기는 queue에서 있다가 콜스택 다 나가면 들어오니까



//
//Asynchronous callback
//API를 활용해서 비동기적으로 콜백해서 실행

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback2'), 2000);


//!CAUTION!
//lots of callback nesting => callback hell