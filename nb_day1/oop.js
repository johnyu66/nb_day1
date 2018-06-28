(function () {
    let obj={_sex:null,name:'john',
        get sex(){return this._sex},
    set sex(s){this._sex=s}};
    Object.defineProperty(obj,'age',
        {value:100,enumerable:true,writable:true,configurable:true});
    obj.sex=false;
    console.log(obj.sex);

    function Person() {

    }
    Person.prototype=obj;
    var p=new Person();

    //console.log(obj.age);
    // obj.age=120;
    // delete obj.age;
    // for(let item in obj){
    //     console.log(obj[item]);
    // }
})();

(function () {
    let obj={name:'john',favs:[1,3]};
    let obj1={name:"alice",age:100};
    Object.assign(obj1,obj);
    obj.favs.push(5);
    console.log(obj1.favs);
    // obj.name="tom";
    // console.log(obj1);
})();