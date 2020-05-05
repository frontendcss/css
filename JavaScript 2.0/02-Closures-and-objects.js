"use strict";

// Почему важно отличать LHS b = от RHS a?

// function foo(a){
// 	console.log(a + b); // ReferenceError
// 	b = a;
// }

// foo(2);
// console.log(b()); // TypeError

// Лексическая область видимости

// function foo(a) {
//  var b = a * 2;

//  function bar(c) {
//  	console.log( a, b, c );
//  }

//   bar( b * 3 );
//  }

//  foo( 2 ); // 2 4 12

// Искажение лексической области видимости 2 примера!

// Function eval
// setInterval
// setTimeout

// function foo(str, a){
// 	eval(str);

// 	console.log(a, b);
// }

// foo("var b = 3;", 1);


// with
// "use strict bilan ishlamidi"
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// }

// // "более простая" сокращенная запись
// with(obj){
// 	a = 2;
// 	b = 3;
// 	c = 4;
// }

// console.log(obj.a);

// function foo(obj){
// 	with(obj){
// 		a = 5;
// 	}
// }

// let o1 = {
// 	a: 2
// };

// let o2 = {
//  b: 3
// };

// foo(o1);
// console.log(o1.a); // 5

// foo(o2);
// console.log(o2.a); //undefined

// console.log(a); //  2 — ой, утечка глобального значения!

// Функциональные и блочные области видимости

//Немедленный вызов функциональных выражений

// (function muFunction(){
// 	console.log("Hello world");
// })();

// (function myFunctionVersion(){
// 	console.log("Hello Function");
// }())

// Анонимные и именованные функциональные выражения
// setTimeout(function myFunction(){
// 	console.log(" 1 secund");
// }, 1000)

/*имя global, чтобы в программе существовало четкое
стилистическое разграничение между глобальными и неглобальными ссылками. Конечно, вы можете передать все что угодно из
внешней области видимости, и параметру можно будет присвоить
любое подходящее имя*/
let param = "Limpus";
let glabal = " Glabal";

(function foo(glabal, glabal1){
	console.log(glabal + glabal1);
})(param, glabal);











