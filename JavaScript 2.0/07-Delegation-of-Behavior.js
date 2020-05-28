"use strict"

// Проектирование, ориентированное на делегирование
// Теория делегирования

// let Task = {
// 	setID: function(ID){this.id = ID},
// 	outputID: function(){console.log(this.id)}
// };

// let XYZ = Object.create(Task);

// XYZ.prepareTask = function(ID, Label){
// 	this.setID(ID);
// 	this.lable = Label;
// }

// XYZ.outputTaskDetails = function() {
// 	this.outputID();
// 	console.log(this.label);
// };

// Взаимное делегирование (запрещено)

// Сравнение моделей мышления

let Foo = {
	init: function(who){
		this.me = who;
	},

	identife: function(){
		return " I, am" + this.me;
	},
	obj: function(){
		console.log("Hello, world");
	}
};

let Bar = Object.create(Foo);

Bar.spaek = function(){
	console.log("Hello" + this.identife() + ".");
}

let BarCopy1 = Object.create(Bar);
BarCopy1.init(" BarCopy1");

let BarCopy2 = Object.create(Bar);
BarCopy2.init(" BarCopy2");

BarCopy1.spaek();
BarCopy2.spaek();

BarCopy2.obj();
