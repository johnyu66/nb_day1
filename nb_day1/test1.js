// //'use strict'
// {
//     var m = 100;
// }
// console.log(m)
// class  Person{
//     constructor(name){
//         this.name=name;
//     }
//     sayName(age) {
//         console.log(this.name+"\t"+age);
//     }
//
//
// }
// class SubPerson extends Person{
//
// }
//
// function Person1() {
//
// }
// let p=new Person("john");
// let p1=new SubPerson();
// p.sayName(100);
//
// console.log(Person);
//
// console.log(p1 instanceof Person)

// let s1={name:'john'};;
// s1.name="tom";
// s1=new Date();
// console.log(s1)

console.log(m);
var m=100;
console.log(m);
let m1=sum(1,2)
var sum2=new Function("a","b","return a+b");
function sum(a,b) {
    return a+b;
}
let m2=sum1(3,4);
let sum1=function (a,b) {
    return a+b;
}
console.log(m1);
console.log(m2);

var obj={};
(function () {
    var m=100;

})();

var ss=100;
obj.m=100;
obj.sayName=function () {

}