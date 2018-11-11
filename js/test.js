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

for(var x = 1; x < 100; x++){
	console.log(x);
}