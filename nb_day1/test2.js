// var s="document.cookie";
// let m=eval(s);//eval is evil
// console.log(m);

// var obj={name:"john",age:100};
// obj.sex=true;
// delete obj.age;
// console.log(obj);


var a=new Date();
console.log(a instanceof Object);
Date.prototype=new Object();

var obj={name:"john",age:100};
for(let item in obj){
    console.log(item+"\t"+obj[item]);
}
if(!obj){

}
class MyError extends  Error{

}
function fn(n) {
    if(n<0) throw new Error("scope erroer");
}
try {
    fn()
}catch (e){
    if(e instanceof MyError){

    }
}