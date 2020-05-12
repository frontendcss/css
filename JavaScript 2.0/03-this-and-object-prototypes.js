"use strict"

// this и прототипы объектов

// function identify(){
// 	return this.name.toUpperCase();
// }

// function speak(){
// 	var greeting = "Hello, I'm " + identify.call( this );
// 	console.log(greeting);
// }

// var you = {
// 	name: "Kale"
// }

// var me = {
// 	name: "Rader"
// }

// console.log(identify.call(you));
// console.log(identify.call(me));

// speak.call(you);
// speak.call(me);

// this обретает смысл!

// this Связывание по умолчанию

// function foo(){
// 	"use strict"
// 	console.log(this.a); // this ni o'rnina undefined bo'ladi
// }

// var a = 2;
// foo(); // TypeError: Cannot read property 'a' of undefined

// function foo(){
// 	console.log(this.a);
// }

// (function foo1(){
// 	let a = 2;
// 	foo();
// })();

// Неявное связывание

// function foo(){
// 	console.log(this.a);
// }

// function foo2(){
// 	console.log(this.b);
// }

// let obj = {
// 	b: "Hello, 'this'",
// 	a: 2,
// 	fooCall: foo,
// 	fooCall2: foo2
// }

// obj.fooCall();
// obj.fooCall2();

// Для места вызова важен только верхний/последний уровень цепочки
// ссылок на свойства объекта. Пример:
// function foo(){
// 	console.log(this.a);
// }

// let obj2 = {
// 	a: 2,
// 	fooCall: foo
// }

// let obj1 = {
// 	a: 200,
// 	obj2: obj2
// }


// obj1.obj2.fooCall();

// Неявная потеря this
// "use strict bilan ishlamidi"
// function foo(){
// 	console.log(this.a);
// }

// var obj = {
// 	a: "Limpus",
// 	linkFoo: foo
// };

// obj.linkFoo();

// var copyLink = obj.linkFoo;
// var a = "Soart";// Типерь a также является свойством глобального объекта
// copyLink();


// function foo(){
// 	console.log(this.a);
// }

// var obj = {
// 	a: 2,
// 	callFoo: foo
// };

// function toFunc(fn){
// 	fn();
// }

// var a = "Ops Glabal";

// // toFunc(obj.callFoo);
// setTimeout(obj.callFoo, 1000);

// Явное связывание

// function foo(){
// 	console.log(this.a);
// 	console.log(this.b);
// }

// let obj = {
// 	a: 2,
// 	b: 3
// }

// foo.apply(String("Birinchi"));
// foo.call("Birinchi this"); // undefined

// Жесткое связывание

// function foo(){
// 	console.log(this.a);
// }

// let obj = {
// 	a: 2
// };

// let bar = function(){
// 	foo.call(obj);
// }

// let a = "Ops Glabal";

// bar()
// setTimeout(bar, 1000);

// function foo(smothing,limpus){
// 	console.log(this.a, smothing, limpus);
// 	return this.a + smothing + limpus;
// }

// let obj = {
// 	a: 2
// };

// let func = function(){
// 	return foo.apply(obj, arguments);
// }

// let b = func(3,5);
// console.log(b);

// function foo(smothing, limpus){
// 	console.log(this.a, smothing, limpus);
// 	return this.a + smothing + limpus;
// }

// let obj = {
// 	a: 2
// };

// let bar = foo.bind(obj);
// let b = bar(3,5);
// console.log(b);

// Связывание new

function foo(a){
	this.a = a;
}

let bar = new foo(2);
console.log(bar.a);
















