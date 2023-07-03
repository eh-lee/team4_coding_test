//this는 함수 내에서 함수의 호출 context를 의미한다.
//JS의 함수 안에서 사용되는 변수. 함수를 어떻게 호출하느냐에 따라 그 값이 달라진다.


// //1. 함수와 this
// function func1 (){
//     if(window === this){
//         console.log("window === this");
//     }
// }
//func1(); //>window === this


// //2. 메소드와 this
// var o = {
//     func2 : function (){
//         if(o === this){
//             console.log("o === this");
//         }
//     }
// }
// o.func2(); //> o === this



        //1.
        //func1이 어느 객체에 소속되어 있지 않은 경우에 그 func1을 호출하면, 그 func1에
        //소속되어 있는 this는 window를 가리킴. //window.func1();
        //2.
        //o.func2()를 호출하면 this는 o를 가리킴.

        //당연한 결과. window는 전역 객체이기 때문! func1()는 실제로는 window라는 전역 객체의
        //메소드이기 때문에, func1() === window.func1()  즉 func1()의 this는 window.
        // 함수는 window라는 객체의 메소드. this는 window

        //!! !! 함수 안에서 this라는 키워드는 그 함수가 소속되어 있는 객체를 가리킨다 !! !!

//3. 생성자와 this



//생성자와 new

// //1
// var person  = {};
// person.name = 'egoing';
// person.introduce = function (){
//     return 'My name is ' + this.name; //this는 이 함수가 속해 있는 객체인 person //person.introduce
// }
// console.log(person.introduce());

// //function 안에 담긴 변수는 property
// //property에 담긴 function은 메소드


//2
var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is ' + this.name;
    }
}
console.log(person.introduce());