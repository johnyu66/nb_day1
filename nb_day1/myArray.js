let as=[3,1,4,8];//{},/aaa/,'dfd',"dfdf" ` dfdfd` 13,true,jsx <div></div>
as.push(9);
console.log(as);
let a1=as.pop();
console.log(a1)
console.log(as);
let a2=as.shift();
console.log(a2)
console.log(as);
as.unshift(12);
console.log(as);

as.splice(1,1);
console.log(as);
as.splice(2,1,2,3);
console.log(as);

as.forEach(function (item) {
    console.log(item);
});
console.log("=".repeat(30));
as.forEach(item=>console.log(item));
let b=as.some(item=>item>12);
let b1=as.every(item=>{
    return item>4;
})
let as1=as.map(item=>item*2);
console.log(as1);

let as2=as.slice(1,3);
console.log(as2);
console.log(as);
