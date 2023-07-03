// //Some Object Orient Programming Language

// class Cat {
//     private Long weight;
//     private Long height;
//     private String speciese;
//     private String Nmae;
//     //field value || property  ~ Obj's data


// /** 생성자 함수 '고양이'라는 객체의 인스턴스(하나의 개체)를 생성하는 함수 */
// // 아래의 파라미터들을 인자로 받아서, 이 객체에 속하는 개체 하나를 생성해서 반환해 준다!

//     public Cat(Long weight, Long height, String species, String name){
//         this.weight = weight;
//         this.height = height;
//         this.species = species;
//         this.name = name;
//     }

//     public void sayHello(){
//         print("meow, my name is " + this.name + "!!");
//     }
// }

//기본적으로 자바스크립트에서의 this도 맥락은 같습니다. 프로퍼티나 메서드가 자기를 참조 할 수 있게끔 인스턴스 생성 이후에 해당 인스턴스를 가르키기 위해서 사용합니다. 하지만 자바스크립트에서의 this는 실행 컨텍스트가 생성될 때 함께 결정됩니다. 실행 컨텍스트는 함수를 호출 할 때 생성되므로, this는 함수를 "호출" 할 때 결정된다고 할 수 있습니다. 그래서 어떤 방식으로 호출하냐에 따라 값이 달라진다고 하네요. 이러한 맥락에서 이번 장을 읽어가시면 좋을 것 같습니다.


// console.log(isFinite(100));
// console.log(isFinite(Infinity));
// console.log(isFinite(true));
// console.log(isFinite(false));
// console.log(Number(true));
// console.log(Number(false));
// console.log(isFinite(null));
// console.log(isFinite(Number(null)));
// console.log(isFinite(NaN));
// console.log(isFinite(2E20));


// console.log(parseInt('100',2));
// console.log(parseInt('5',8));
// console.log(parseInt('5',16));



//callback

// function repeat (n){
//     for (let i = 0; i<n; i++) console.log(i);
// }

// function repeatEven (n){
//     for (let i = 0; i<n; i++) {
//         if(!(i%2)) console.log(i);
//     }
// }

// function repeatOdd (n){
//     for (let i = 0; i<n; i++) {
//         if((i%2))console.log(i);
//     }
// }


// function repeat(n, callBackFunction){
//     for (let i = 0; i < n; i++){
//         callBackFunction(i)
//     }
// }