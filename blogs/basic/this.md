## this指向
### 1. 作为对象的方法调用

> this指向该对象

```
var obj = {
    a: 1,
    getA: function(){
        console.log(this===obj);// true
        console.log(this.a);//1
    }
}

obj.getA();
```
### 2.当作为普通函数调用
> this指向全局对象
在浏览器js中，全局对象指向window对象

```
window.name = 'globalName';

var getName = function(){
    console.log(this.name);//globalName
}

var obj = {
    name: 'objName',
    getName: function(){
        console.log(this.name);
    }
}

var getName2 = obj.getName;
getName2();//打印globalName
```
### 3.构造器调用
> 1.当用new调用函数时，该函数总返回一个对象，通常情况下，构造器里的this就指向返回的这个对象

```
var MyClass = function(){
    this.name = 'sven';
}

var obj = new MyClass();
alert(obj.name);// sven
```
> 2.如果构造器显示返回一个object类型对象，就会返回这个对象，而不是this

```
var MyClass = function(){
    this.name = 'sven';
    return {
        name: 'anne'
    }
};

var obj = new MyClass();
alert(obj.name);// anne
```
> 3.如果构造器不显示返回任何数据，或者返回一个非对象类型的数据，就不会产生上述问题

```
var MyClass = function(){
    this.name = 'sven';
    rentun 'anne';
}

var obj = new MyClass();
alert(obj.name);// sven
```
### 4.Function.prototype.call和apply调用
> call 和apply 可以动态的改变传入函数的this

```
var obj1 = {
    name: 'sven',
    getName: function(){
        return this.name;
    }
}
var obj2 = {
    name: 'anne'
}
console.log(obj1.getName());// sven
console.log(obj1.getName.apply(obj2));// anne
```
> this修正

```
window.name = 'window';
var obj = {
    name: 'objName',
    getName: function(){
        return this.name;
    }
};
obj.getName();// objName
var c = obj.getName;
c();//window
//修正
obj.getName = (function(fun){
	return function(){
		return fun.apply(obj)
	}
})(obj.getName);

obj.getName();//objName
var d = obj.getName;
d();//objName
```
### 5.apply 、call 、bind

> apply(obj,[option])

> call(obj,op1,op2)

> bind(obj,op1,op2)

> call 和apply 都会立即执行，bind会返回新函数，不会立即执行，bind参数可以在bind时候传，也可以在方法调用时传，都穿会concat


```
var obj1 = {
    name: 'boj1',
    getName: function(p1,p2){
        return this.name+'-'+p1+'-'+p2;
    }
}
var obj2 = {
    name: 'obj2'
}

obj1.getName.apply(obj2,[1,2]);// obj2-1-2
obj1.getName.call(obj2,1,2);// obj2-1-2
var c = obj1.getName.bind(obj2,1);
c(2);// obj2-1-2
```

> bind 实现


```
Function.prototype.bind = function(){ 
    var self = this, // 保存原函数
        context = [].shift.call( arguments ),
        args = [].slice.call( arguments ); 
    return function(){ // 返回一个新的函数
                       // 需要绑定的 this 上下文 // 剩余的参数转成数组
        return self.apply( context, [].concat.call( args, [].slice.call( arguments ) ) ); // 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this
                        // 并且组合两次分别传入的参数，作为新函数的参数
    }
}
```


### 面试题：
> 面试题 http://www.cnblogs.com/xxcanghai/p/5189353.html#!comments

```js
var a = 10;
var foo = {
  a:20,
  bar: function() {
    var a = 30;
    return this.a;
  }
}

console.log(foo.bar())
console.log((foo.bar)())  // 括号值改变优先级 所以这里等同于 foo.bar()
console.log((foo.bar = foo.bar)()) // = 会返回 这个方法 this指向window
console.log((foo.bar,foo.bar)()) // , 会依次运算 返回最后的语句执行的结果  执行window
```
```js
let obj = {
  a: function () {
    return function () {
      console.log(this)
    }
  }
}
obj.a()()
```
```js
var a = 1
var o = { a: 2, getA () { console.log(this.a) } }
o.getA.apply(null) // 1
```
