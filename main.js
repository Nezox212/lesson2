// Циклы
//1 Вывести числа от 1 до 20
for(let i =1; i <= 20;i++) console.log(i);
//2 Вывести числа от 20 до 1.
for(let i =20; i >= 1 ;i--) console.log(i);
//3 Вывести все чётные числа от 1 до 50.
for(let i = 1;i <= 50;i++) {
    if(i % 2 == 0){console.log(i);}
}
//4 Посчитать сумму чисел от 1 до 100.
let i = 1
let summ = 0
while(i <= 100){
    summ += i
    i++
}
console.log(summ)
// 5 - Вывести квадраты чисел от 1 до 10.
let i1 = 1
let square = 1

while(i1 <= 10){
    square = i1
    square **= 2
    console.log("Квадрат " + i1 + " = " + square)
    i1++
}

//6 Вывести таблицу умножения для числа 5.
let i2 = 1
let five = 5
while(i2 <= 10){
    console.log(i2 + " * " + " 5 " + " = " + five * i2)
    i2++
}

//7 - Посчитать сумму всех чётных чисел от 1 до 50.
let i3 = 1
let summ1 = 0

while(i3 <= 50){
    if(i3 % 2 === 0){
        summ1 += i3
    }
    i3++


}console.log(summ1)


//8 - Вывести все числа от 0 до 100 с шагом 5.
for(let i = 0 ; i <= 100; i += 5) console.log(i)

//9 - Посчитать, сколько чисел от 1 до 100 делятся на 7 и вывести количество
let count = 0
for(let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        console.log(i)
        count++
    }
}console.log("Общее количество цифр делящихся на 7 : " + count)

//Объекты
//      - Создать объект user с полями name, age, city и вывести их.
const user = {
    name: "Антон",
    age: 23,
    city: "Москва"
}
console.log(user);

//- Изменить значение свойства age.

user.age = 30;

//- Добавить свойство phone.

user.phone = "iphone"
console.log(user);

//- Удалить свойство city.

delete user.city

//- Проверить наличие свойства email с помощью оператора in.
console.log("mail" in user)

// - Вывести все ключи объекта через цикл
// - Вывести все значения объекта через цикл

for (key in user) {
    console.log(key)
    console.log(user[key])
}
//- Посчитать количество свойств объекта
console.log(Object.keys(user).length)



//Массивы

//- Создать массив из 5 чисел и вывести каждый элемент через цикл.

let mass = [1,2,3,5,4,19,-1,-10]

for (let i = 0; i < mass.length; i++) {
    console.log(mass[i])
}

//- Найти сумму всех элементов массива.
let massSumm = 0
for (let i = 0; i < mass.length; i++) {
    massSumm += mass[i]
}console.log("сумма чисел массива = " + massSumm)

//- Найти максимальный элемент массива.
let max = mass[0];

for (let i = 1; i < mass.length; i++) {
    if (mass[i] > max) {
        max = mass[i];
    }
}
console.log( "Наибольшее число в массиве : " +  max)

//- Найти минимальный элемент массива.

let min = mass[0];

for (let i = 1; i < mass.length; i++) {
    if (mass[i] < min) {
        min = mass[i];
    }
}
console.log( "Наименьшее число в массиве : " +  min)

//- Посчитать сумму только чётных элементов массива.
let sumOfEven = 0
for (let i = 0; i < mass.length; i++) {
    if(mass[i] % 2 == 0){ sumOfEven += mass[i] }

}
console.log("Сумма четных чисел массива =  " + sumOfEven)


//- Посчитать количество отрицательных чисел в массиве.
let negNum = 0
for (let i = 0; i < mass.length; i++) {
    if (mass[i] < 0 ){ negNum += mass[i] }
}console.log("Сумма негативных чисел массива = " + negNum)

//- Найти произведение всех элементов массива.
let multiply = 1
for (let i = 0; i < mass.length; i++) {
    multiply *= mass[i]
}console.log("произведение все чисел массива = " + multiply)