//1 Создай три числа и найди среди них самое большое
const firstNumber = +prompt("напишите первое число")
const secondNumber = +prompt("напишите второе число")
const thirdNumber = +prompt("напишите третье число")
if(firstNumber > secondNumber && firstNumber > thirdNumber){ console.log(firstNumber + " больше чем " + secondNumber + " и " + thirdNumber); }
else if(secondNumber > firstNumber && secondNumber > thirdNumber) {console.log(secondNumber + " больше чем " + firstNumber + " и " + thirdNumber); }
else if (thirdNumber > firstNumber && thirdNumber > secondNumber ) {console.log(thirdNumber + " больше чем " + firstNumber + " и " + secondNumber); }
else (console.log("Ваши числа одинаковые " + firstNumber + ", "  + secondNumber + ", " +  thirdNumber));



//2 Проверь, находится ли возраст в диапазоне от 18 до 60 лет включительно
const age = +prompt("Сколько вам лет?")
if(age >= 18 && age <= 60){console.log(true)}
else(console.log(false))



//3Создай константы username и password, затем попроси у пользователя ввести username и пароль.
// Eсли пользователь ввёл данные корректно - выведи “Вы успешно вошли в систему”,
// а если нет то выведи “Некорректный username или пароль”
const username = "ruslan"
const password = +"123456"

const name = prompt("Введите ваш username")
const pass = +prompt("Введите ваш password")
if (username === name && password === pass) {console.log("Вы успешно вошли")}
else (console.log("Вход запрешен , неверный логин или пароль"))


//4 Создай тест из 5 вопросов и создай 5 констант с правильными ответами. Попроси у пользователя ввести 5 ответов на
// всё 5 вопросов и в конце выведи количество правильных ответов пользователя
const firstQuestion = "Лондон"
const secondQuestion = "Меркурий"
const thirdQuestion = +"60"
const fourthQuestion = "AND"
const fifthQuestion = +"2"

const firstAnswer = prompt("Столица Великобритании");
const secondAnswer = prompt("Самая близкая планета к Солнцу")
const thirdAnswer = +prompt("15 * 4 ?")
const fourthAnswer = prompt("Что означает && в JS ? ")
const fifthAnswer = +prompt("4 под корнем")

if(firstQuestion == firstAnswer ){console.log("1. " + firstAnswer + " Правильно!")}
else(console.log( "1. " + firstAnswer + " неправильно): " + "               правильный ответ:" + firstQuestion))

if(secondQuestion == secondAnswer){console.log("2. " + secondAnswer + " Правильно!")}
else(console.log( "2. " + secondAnswer + " неправильно): " + "               правильный ответ:" + secondQuestion))

if(thirdQuestion == thirdAnswer){console.log("3. " + thirdAnswer + " Правильно!")}
else(console.log( "3. " + thirdAnswer + " неправильно): " + "               правильный ответ:" + thirdQuestion))

if(fourthQuestion == fourthAnswer){console.log("4. " + fourthAnswer + " Правильно!")}
else(console.log( "4. " + fourthAnswer + " неправильно): " + "               правильный ответ:" + fourthQuestion))

if(fifthQuestion == fifthAnswer){console.log("5. " + fifthAnswer + " Правильно!")}
else(console.log( "5. " + fifthAnswer + " неправильно): " + "               правильный ответ:" + fifthQuestion))





//5 Если число делится на 2 или на 7, выведи "Подходит" а иначе “Не подходит”
const twoAndSevenNumber = +prompt("Введите число")
if (twoAndSevenNumber % 2 === 0 && twoAndSevenNumber % 7 === 0 ) {console.log("Подходит")}
else(console.log("Не подходит"))


//6 Если сумма покупки больше 5000, предоставь скидку 10% и выведи результат, а иначе выведи саму сумму.
const price = +prompt("Введите сумму покупки")
if(price >= 5000){console.log("итоговая сумма со скидкой: " + price * 0.9 )}
else(console.log("итоговая сумма без скидки: " + price))


//7 Проверь, является ли символ гласной буквой (a, e, i, o, u). ( true | false )
const letter = prompt("Введите любую английскую букву");
if (letter === "a" || letter === "e" || letter === "o"  || letter === "i" || letter === "o") {console.log(true)}
else console.log(false)



//8 Попроси у пользователя число и процент, затем вычисли данный процент от данного числа
const number = +prompt("Введите любое число")
const percent = prompt("Введите процент для вычисления")
console.log( percent * 0.01 * number)


