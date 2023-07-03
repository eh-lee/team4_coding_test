//Promise is a JS object for Async Operation
// 1. state : pending -> fulfilled || rejected
// 2. Producer(promise obj) VS Consumer


// 1.Producer
// when new Promise is created, the executor runs simultaneously

// const promise = new Promise((resolve, reject) => {
//     //someHeavyWork() ~ network, read files ...
//     //시간이 오래 걸려서 sync로 처리하면 시간이 너무 걸려서
//     //promise를 만들어서 비동기적으로 처리를 하는 것이 좋다
//     console.log("doing sth");
// })

// //promise는 만들어지는 순간 executor를 실행해 버린다.
// //불필요한 네트워크 통신을 방지하기 위헤
// //사용자의 요구에 의해 동작해야 하는 경우라면 이렇게 하면 안 된다.

//비동기적 코드 작성
const promise = new Promise((resolve, reject) => {
    console.log('doing sth');
    setTimeout(() => {
        resolve('ellie');
        reject(new Error('no network'))
    }, 2000);
});


// 2. Consumer: then, catch, finally

//값이 정상적으로 수행(resolved)된다면("then~"), 이제 내가 value를 받아와서 콜백함수를 수행할 거야
promise //
    .then(value => {
        console.log(value); //ellie
    }) //세미콜론 절대 붙이지 마...
    //then을 호출하게 되면 다시 promise를 호출하게 되고
    //리턴된 promise에 catch를 등록하는 것
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    }); // resolve든 error든 상관없이 마지막에 finally() 실행됨.
        // 어떤 기능을 마지막에 실행하고 싶을 때 활용 



// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
     });
    })
    //then은 값 또는 promise를 바로 전달 가능 59에서 5를 받아오는 63라인
    .then (num => console.log(num));


//4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} =>  🍳`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
//받아오는 밸류를 바로 넣어줄 때는 생략이 가능 아래처럼
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen()//
    .then(getEgg)
    // .catch(error => {
    //     return '🍞';
    // })
    .then(cook)
    .then(console.log)
    .catch(console.log);