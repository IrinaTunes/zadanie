// задание 1
// alert('Я JavaScript');  

// задание 2
// let name = 'Иван';
// let admin = 'Иван';
// alert(admin);

// задание 3
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello ilya

// задание 4
// let result = prompt('Какое у тебя имя?', '');
// alert(result);

// задание 5
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1
// alert(d)

// задание 6
// let a = 2; 
// let x = 1 + (a *= 2);
// alert(a); // 4
// alert(x); // 5

// задание 7
// let a = Number(prompt("Первое число?", ''));
// let b = Number(prompt("Второе число?", ''));
// alert(a + b); // 12

// задание 8
// 7 > 5 // True
// "стол" > "стул" // False
// "4" > "52" // False
// undefined == null // True
// undefined === null // False
// null == "\n0\n" // False
// null === +"\n0\n" // False
// alert(null === +"\n0\n")

// задание 9
// if ("0") {
//     alert( 'Привет' );
//   } // да

// задание 10
// let s = prompt('Какое «официальное» название JavaScript?', '');

// if (s == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }

// задание 11
// let n = prompt('число', '');
// if (n > 0) {
//     alert('больше нуля');
// } else if (n < 0) {
//     alert('меньше нуля');
// } else {
//     alert('равно');
// }

// задание 12
// let result;
// (a + b < 4) ? result = 'Мало' :  result = 'Много'

// задание 13
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' :
//     '';

// задание 14 
// alert( null || 4 || undefined ); // 4

// задание 15
// alert( alert(1) || 2 || alert(3) ); // 1

// задание 16
// alert( 1 && null && 2 ); // null

// задание 17
// alert( alert(1) && alert(2) ); // 1

//  задание 18
// alert( null || 2 && 3 || 4 ); // 3

// задание 19
// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value); // 30

// задание 20
// if (age >= 14 && age <= 90){
// }

// задание 21
// вариант не!
// if (!(age >= 17 && age <= 99)) {
// }

// вариант без не!
// if (age < 17 || age > 99) {
// }

// задание 22
// if (-1 || 0) alert( 'first' ); // выполнится, 'first'
// if (-1 && 0) alert( 'second' ); // не выполнится
// if (null || -1 && 1) alert( 'third' ); // выполнится, 'third'


// задание 23
// let login = prompt("Введите логин", "");
// if (login === "Админ") {
//     let password = prompt("Введите пароль", "");

//     if (password === "Я главный") {
//         alert("Здравствуйте!");
//     } else if (password === "" || password === null) {
//         alert("Отменено");
//     } else {
//         alert("Неверный пароль");
//     }
// } else if (login === "" || login === null) {
//     alert("Отменено");
// } else {
//     alert("Я вас не знаю");
// }

// задание 24
// function add(a, b) {
//     return a + b;
// }
// alert(add(2, 3));

// function add(a, b) {
//     return a - b;
// }
// alert(add(2, 3));

// function add(a, b) {
    // if (b === 0) {
    //     return "Ошибка";
    // }
//     return a / b;
// }
// alert(add(2, 3));

// function add(a, b) {
//     return a ** b;
// }
// alert(add(2, 3));


// задание 25

// function getStringLength(a) {
//     return a.length;
// }
// alert(getStringLength("roiuyhezy"))

// задание 26
// let n = prompt('число', '');
// function checkNumber(n) {
//     if (n > 0) {
//         alert("Число положительное");
//     } else if (n < 0) {
//         alert("Число отрицательное");
//     } else {
//         alert("Число равно нулю");
//     }
// }
// alert(checkNumber(n))

// задание 27
// let a = prompt('число1', '');
// let b = prompt('число2', '');
// function add(a, b) {
//     return (a + b)/2;
// }
// alert(add(a, b));

// задание 28

// const object = {
//     name: "kruto",
//     age: 16
// }
// console.log(object.name)
// console.log(object.age)

// задание 29
// let n = prompt('число', '');
// function isEven(n) {
//     return n % 2 === 0;
// }
// alert(isEven(n))

// задание 30
// let n = prompt('число', '');
// function isEven(n) {
//     return n % 2 === 0;
// }
// console.log(isEven(n))

// задание 31
// let a = prompt('число1', '');
// let b = prompt('число2', '');
// let x = a / b;
// if (a % b) {
//     alert('с остатком');
// } else {
//     alert('без остатка');
// }