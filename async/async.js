//aysnc & await
//syntatic sugar of promise API (upgraded API)
//clear style of using promise


// function fetchUser(){
    //     //do network request in 10 secs....
    //     return new Promise((resolve, rejecet) =>{
        //         resolve('ellie');
        //     });
        // }
        
        // ===
        
// 1. async
async function fetchUser(){
    //do network request in 10 secs....
    return 'ellie';
}
//async라는 예약어 키워드를 함수 앞에 쓰면 코드블록이 자동으로 프로미스로 바뀐다 !!!

const user = fetchUser();
user.then(console.log);
console.log(user);
//이렇게 오래 걸리는 코드는 당연히 비동기로 넘겨 줘야 함. 안 그러면 동기 처리가 너무 오래 걸림.
//콜스택 다 밀림

//Promise라는 obj를 가지고 then이라는 콜백함수만 등록해 놓으면
//user data가 준비되는 대로 콜백함수 불러 줄게!
//resolve, reject  라는 callback 함수를 받는 executor라는 콜백함수
//resolve나 reject를 이용해서 fulfilled이든 rejected든 해 줘야지 안 그러면 pending state
//근데 그냥 async 붙이면 끝이네..



//2. await
// async function 안에서만 사용 가능한 keyword

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1500);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

//callback hell again

// function pickFruits(){
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

// pickFruits().then(console.log);

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);



//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);


function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log);