

/*
Параметры это имена, которые вы указываете в определении функции.
Аргументы это значения, которые вы передаете функции.

function nameFunction(параметр){
	BodyFunction
	Инструкция
	Инструкция
	Инструкция
	return возврат значения
}

FunctionCall("Argument");
*/

var Soart = "Soart";
var Limpus = "Limpus";
// В определении функции разрешается задавать до 255 параметров
function test(paramOne, paramTru){
	console.log("Hello " + paramOne);
	console.log("Hello " + paramTru);
}
test(Soart,Limpus);
console.log(" ");

//Передача аргументов по значению
function func0(number1, number2){
	number1++;
	number2++;
	console.log("Birinchi Number " + number1);
	console.log("Ikkinchi Number " + number2);
}

var number1 = 10;
var number2 = 20;

func0(number1,number2);
console.log(" ");

//Вызов функции с неполным числом аргументов
function func2(param1, param2, param3){
	console.log(param1);
	console.log(param2);
	console.log(param3);
}

func2("param1", "param2");
console.log(" ");

// Аргументы по умолчанию
function func3(param1){
	if(typeof param1 === 'undefined'){
		console.log("parametr pustoy");
	}else{
		console.log("Hello " + param1);
	}
}

func3("Soart")
console.log(" ");

// Получение значений аргументов с помощью объекта arguments
function flexibleWelcome() {
	var welcome = "Добро пожаловать, ";
	for (i = 0; i < arguments.length; i++) {
		welcome = welcome + arguments[i] + " ";
	}
return welcome;
}

console.log(flexibleWelcome("Christopher" , "James" , "Phoenix" , "Minnick"));
console.log(flexibleWelcome("Eva" , "Ann" , "Holland"));
console.log(" ");

// Область видимости функции
var i = 15;
function func(){
	var i = 10;
	console.log(i);
		function innerFunc(){
			console.log(i);
			var i = 20;
		}
	innerFunc();
}
func();

//Анонимные функции
var AnaFunction = function (){
	var text = "AnamimFunction";
	return text;
}

/*
Различия между анонимными и именованными функциями

1) Между созданием именованной функции и присвоением анонимной функции пере­менной имеются
важные и иногда полезные различия. Первое из них состоит в том, что анонимные функции, 
присвоенные переменной, существуют и могут вызываться лишь после выполнения операции присваивания.
Доступ же к именованным функци­ям возможен в любом месте программы.

2) Суть второго различия заключается в том, что в случае анонимных функций зна­чение переменной
может быть в любой момент изменено, и ей может быть присвоена другая функция. Это делает механизм
анонимных функций более гибким по сравне­нию с именованными функциями.

*/

//Самовыполняющиеся анонимные функции

// (function(){
// 	var limpus = "Ananim function";
// 	console.log();
// })();

//Рекурсия

// function recur(index){
// 	console.log(index);
// 	if(index < 10){
// 		recur(index + 1);
// 	}
// 	else{
// 		return;
// 	}
// }
// recur(1);


function showMessage(text) {
	text = text || 'Текст не передан';
	console.log(text);
}

showMessage();

/*
Если аргументов передано больше, чем надо, например showMessage("Маша", "привет", 1, 2, 3)
то ошибки не будет. Но, чтобы получить такие «лишние» аргументы, нужно будет прочитать их из
специального объекта arguments, который мы рассмотрим в главе Псевдомассив аргументов "arguments".
*/

/*
showMessage(..)     // префикс show, "показать" сообщени
getAge(..)          // get, "получает" возраст
calcD(..)           // calc, "вычисляет" дискриминант
createForm(..)      // create, "создает" форму
checkPermission(..) // check, "проверяет" разрешение, возвращает true/false
*/

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return 'разрешили?';
// 	}
// }

// console.log(typeof checkAge(20));

// function checkAge(age){
// 	return (age > 18) ? true: console.log("разрешили?");
// }

// checkAge(20);

// function checkAge(age) {
// 	return (age > 18) || console.log('разрешили?');
// }

// checkAge(20);

// Функцию можно скопировать в другую переменную:
function func(){
	console.log("copyFunc");
}
var copyFunction = func;
copyFunction();


// Объявление Function Expression

// Function Declaration
sum1();
function sum1(){
	console.log("Hello Declaration Function");
}

// Function Expression
var sum2 = function(){
	console.log("Hello Expression Function");
}

sum2();

// Условное объявление функции 'use strict'

// var age = +prompt("Сколько вам лет?", 20);
// if (age >= 18) {
// 	function sayHi() {
// 		alert( 'Прошу вас!' );
// 	}
// } else {
// 	function sayHi() {
// 		alert( 'До 18 нельзя' );
// 	}
// }

// sayHi();

// var age = +prompt("Сколько вам лет?", 20);
// var sayHi;
// if (age >= 18) {
// 	sayHi = function() {
// 		alert( 'Прошу вас!' );
// 	}
// } else {
// 	sayHi = function() {
// 		alert( 'До 18 нельзя' );
// 	}
// }
// sayHi();

// Анонимные функции
// function ask(quastions, ok, no){
// 	if(confirm(quastions)){
// 		ok();
// 	}
// 	else{
// 		no();
// 	}
// }

// function ok(){
// 	alert("Siz Rozi Bo'ldingiz");
// }

// function no(){
// 	alert("Siz No Rozisiz");
// }

// ask("Siz Rozimisizs?", ok, no);

// ask(
// 	"Siz Rozimisizs?",
// 	function(){alert("Siz Rozi Bo'ldingiz");},
// 	function(){alert("Siz No Rozisiz");}
// );


// Именованные функциональные выражения
// function func(age, name){
// 	return age + name;
// }

// console.log(func(4, 4));

// var newFunc = func;
// func = null;

// console.log(newFunc(1,1));












