// let fn=new Function("a","b","return a+b;");
// let x=fn(2,3);
// console.log(x);
// function fn1(firstArg,sec) {
//     console.log("hello world!")
// }
// let fn2=fn1;
// fn2();
// console.log(fn1 instanceof Object);
//
//
// //function is Data
// function sum(a,b,callback) {
//     return callback(a)+callback(b);
// }
// function multi(a) {
//     return 2*a;
// }
// let rs=sum(1,2,multi);
// console.log(rs);
//
// let as=[9,2,1,4];
// as.sort(function (a,b) {
//     return b-a;
// });
//
// console.log(as);
//
// let o1={name:"john",age:100};
// let o2={name:'alice',age:120};
// let os=[o1,o2];
//
// os.sort(function (a,b) {
//     return a.name>b.name?1:a.name==b.name?0:-1;
// });
//
// os.sort(function (a,b) {
//     return a.age>b.age?1:a.age==b.age?0:-1;
// });
//
// os.sort((a,b)=>{
//     return a.age>b.age?1:a.age==b.age?0:-1;
// });


function sumFactory(){
    let local=100;
    return function (a,b) {
        return local+a+b;
    }
}

let sum3=sumFactory();
let rs2=sum3(3,4);
console.log(rs2)

//Class
function Person() {
    this.name="john";
    //method
    this.sayName=function () {
        console.log(this.name);
    }
}

let p=new Person();
console.log(p.name);
p.sayName();
//闭包

global.name=200;
function fn5() {
    console.log(this.name);
}
fn5();


function fn6(a,b) {

    return a+b;
}
function fn6(a) {
    return 10*a;
}
let m4=fn6(3);
console.log(m4)


function work() {
    console.log("init ....connect network");
    return function () {
        console.log("other work....");
    }
}
work=work();
work();
work();

(function () {
    var m=100;
})();

(()=>{
    function fn() {
        console.log(this.name);
    }
    let obj={name:"john"};
    let obj1={name:"tom"};
    // obj.say=fn;
    // obj.say();
    fn.call(obj);
    fn.call(obj1);


    let as=[3,1,2];

    let ob={};
    ob[0]=5;
    ob[1]=8;
    ob[2]=6;
    ob.length=3;

    [].sort.call(ob);
    console.log(ob)


})();

(function () {
    console.log("=".repeat(30));
    function fn(a,b) {
        console.log(this.name+"\t"+a+"\t"+b);
    }
    let obj={name:'john'};
    //fn.call(obj,100,true);
    fn.apply(obj,[100,true]);
    let fn1=fn.bind(obj);
    fn1(30,false);

})();


(function () {
    console.log("=".repeat(30));
    function sum() {
        let total=0;
        for(let i=0;i<arguments.length;i++){
            total+=arguments[i];
        }
        return total;
    }
    console.log(sum.length);
    let rs=sum(1,2,3,4);
    console.log(rs);

})();


(function () {

    function factorial(n) {
        if(n==1) return 1;
        else return n*arguments.callee(n-1);
    }
    let m=factorial(5);
    console.log(m);


})();
console.log("=".repeat(30));
var m=100;
function outter() {
    let x=20;
    let m=12;

   return function inner() {
       console.log(x+"\t"+m);
   }

}

let oinner=outter();
let oinner1=outter();


(function () {
    function counter() {
        let m=0;
        return function () {
            return ++m;
        }
    }
    let c1=counter();
    let c2=counter();
    console.log(c1());
    console.log(c1());
    console.log(c2());

})();


(function () {
    let o1={name:'john',age:100};
    let o2={name:'alice',age:120};
    let os=[o1,o2];

    function comparatorFactory(pn) {
        return function (o1,o2) {
           return o1[pn]>o2[pn]?1:o1[pn]==o2[pn]?0:-1;
        }
    }
    let nameComparator=comparatorFactory("name");
    let ageComparator=comparatorFactory("age");

    os.sort(ageComparator);
    console.log(os);


})();


(function () {
   function outter() {

       var fns=[];
       let i=0;
       for(i=0;i<10;i++){
            fns.push(function (x) {
                return function () {
                    return x;
                }
            }(i))

       }

       return fns;
   }

   let fns=outter();
   for(let i=0;i<fns.length;i++){
       console.log(fns[i]());
   }
})();

(function () {
    function Person() {

    }
    console.log(String.__proto__==Number.__proto__)
    console.log(Function.prototype==String.__proto__);
    console.log(Person.__proto__==String.__proto__);
    console.log(Function.prototype==Function.__proto__);
})()
