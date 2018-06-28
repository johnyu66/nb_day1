(function () {
    function PersonFactory(name) {
        let o={name:name};
        o.sayName=function () {
            console.log(this.name);
        }
        return o;
    }
    let o=PersonFactory("johnYu");
    o.sayName();

    function Person(name) {
        this.name=name;
        if(typeof Person.prototype.sayName!='function'){
            Person.prototype.sayName=function () {
                console.log(this.name);
            }
        }
    }




    let p1=new Person("TomLi");
    p1.sayName();
    console.log(p1 instanceof Person);

})();

(function () {
    //let a=new Array(1,2,3);
    function MyArray() {
        let ary=[];
        [].push.apply(ary,arguments);
        ary.pipeString=function () {
            return ary.join(",");
        }
        return ary;
    }
    let a=new MyArray(1,2,3);
    console.log(a.pipeString());


})();


(function () {
    function Animal(name) {
        this.name=name;
        this.favs=[1,3];
    }
    function Person(name) {

        Animal.call(this,name);
    }
    Person.prototype=new Animal();
    let p=new Person("john");
    let p1=new Person("tom");
    p.favs.push(5);
    console.log(p.name,p.favs);
    console.log(p1.name,p1.favs);
})()