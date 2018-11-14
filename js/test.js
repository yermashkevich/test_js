// Наибольшее из 3-х чисел
/*var x = +prompt("Введи 1-ое число");
var y = +prompt("Введи 2-ое число");
var z = +prompt("Введи 3-е число");
var res;

// Проверка введенных данных
if(isNaN(x) || isNaN(y) || isNaN(z)){
	res = "Я же просила ввести числа, идиот."
}
else if((x > y) && (x > z)){
	res = x;
} else if(y > z){
		res = y;
	} else{
		res=z;
	}
alert(res);*/

// Цикл while
/*var x = +prompt("Введи число");

while(isNaN(x)){
 	x = +prompt("Ну ты нормальный? Введи число");
}

alert(x * 2);*/

// Цикл do while
/*var x;

do{
 	x = +prompt("Введи число");
}
while(isNaN(x));

alert(x * 2);*/

// Цикл for

/*for(var x = 1; x < 100; x++){
	console.log(x);
}*/

// Задание 1
/*var a = +prompt("Введи 1-ое число");
var b = +prompt("Введи 2-ое число");
var c = +prompt("Введи 3-е число");
var res;

while(isNaN(a) || isNaN(b) isNaN(c)) {
	a = +prompt("Введи 1-ое число");
	b = +prompt("Введи 2-ое число");
	c = +prompt("Введи 3-ое число");
}

if((x == y) (x == z) (y == z)){
	res = "Невозможно найти среднее"
} 

if(((a > b) && (a < c)) || ((a < b) && (a > c))){
	res = a;
} else if(((b > a) && (b < c)) || ((b < a) && (b > c))){
	res = b;
} else {
	res = c;
}

alert(res);*/

//Задание 2. Арифметический тренажер. Рандомные числа от 3 до 15
/*for(var i = 10; i > 0; i--){
	var x = Math.floor(Math.random()*13) + 3;
	var y = Math.floor(Math.random()*13) + 3;
	var res = x * y;
	var answer = +prompt("Сколько будет " + x + " * " + y);
	if(res == answer){ 
		console.log(true);
	} else{
		console.log("No" + x + "*" + y + "=" + res);
	} 
}*/

// Задание 3.1. Функция
/*function randomInt(min, max){
	var length = max - min + 1;
	var rand = Math.floor(Math.random() * length) + min;
	return rand;
}


for(var i = 10; i > 0; i--){
	var x = randomInt(3, 15);
	var y = randomInt(3, 15);
	var res = x * y;
	var answer = +prompt("Сколько будет " + x + " * " + y);
	if(res == answer){ 
		console.log(true);
	} else{
		console.log("No" + x + "*" + y + "=" + res);
	} 
}*/

// Задание 3.2. Функция

/*function mathOp (a, b, op) {
	var res;
	if(op == "+") {
		res = a + b;
	} else if(op == "-") {
		res = a - b;
	} else if(op == "*") {
		res = a * b;
	} else if(op == "/") {
		res = a / b;
	} else {
		alert("Stop it, stupid girl!");
	}
	return res;
}

console.log(mathOp(4, 2, "+"));
console.log(mathOp(4, 2, "-"));
console.log(mathOp(6, 2, "/"));
console.log(mathOp(4, 2, "*"));
console.log(mathOp(4, 2, "."));*/

// Задание 4. Арифметический тренажер продвинутый
function randomInt(min, max){
	var length = max - min + 1;
	var rand = Math.floor(Math.random() * length) + min;
	return rand;
}

function mathOp (a, b, op) {
	var res;
	if(op == "+") {
		res = a + b;
	} else if(op == "-") {
		res = a - b;
	} else if(op == "*") {
		res = a * b;
	} else if(op == "/") {
		res = a / b;
	} else {
		alert("Stop it, stupid girl!");
	}
	return res;
}

alert("Если получаешь дробное число, вводи 2 знака после запятой")

var opMas = ["+", "-", "/", "*"];
var answerStr, answer;

for(var i = 10; i > 0; i--){
	var x = randomInt(3, 15);
	var y = randomInt(3, 15);
	var op = opMas[randomInt(0, 3)];
	var res = mathOp(x, y, op);
	do {
		answerStr = prompt("Сколько будет " + x + op + y);
		answer = +answerStr;
	} while(answerStr == "" || isNaN(answer));
	

	if(res.toFixed(2) == answer.toFixed(2)){ 
		console.log(true);
	} else{
		console.log("No" + x + op + y + "=" + res);
	} 
}


