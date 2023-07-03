// function three(){
//     throw Error ("last callstack");
//     console.log("I love JS..?..")
//     console.log("fourth callstack");
// }

// function two(){
//     three();
//     console.log("third callstack");
// }

// function one(){
//     two();
//     console.log("second callstack");
// }

// function zero(){
//     one();
//     console.log("first callstack");
// }

// zero();
// //Call Stack
// //(anonymous) -> zero -> one -> two -> three | and all these aren't executed yet

// //Real Execution
// // three //>I love JS..?.. -> two -> one -> zero -> (anonymous)





// // //command opt i = i for browser inspectator
// // //

// // var a = {
// //     name : "kim",
// //     f : function () {
// //         return console.log(this);
// //     }
// // }
// //     a.f();


// // var a = {
// //     name : "kim",
// //     f : function(b){
// //         return console.log("a의 프로퍼티 f의 this:", this);
// //     }
// // }
// // function b(){
// //     return console.log("b의 this:", this);
// // }
// // a.f(b());
// // // console.log(a.f(b()));


console.dir(console);

//코어자바스크립트 안 옴. 교재를 보고 한다는데