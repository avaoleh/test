'use strict'

let money,
    time;

let expenses_question,
    expenses_answer;

money = prompt("Ваш бюджет на месяц ($)", "100");
time = prompt("Введите дату в формате YYYY-MM-DD");

expenses_question = prompt("Введите обязательную статью расходов в этом месяце", "10");
expenses_answer = prompt("Во сколько обойдется?", "20");

let appData ={
    budjet: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {
        expenses_question: expenses_answer 
    },
    income: [],
    savings: false
};

console.log(appData.timeData);
console.log(appData.budjet);

alert("Бюждет за 30 дней = " + appData.budjet * 30);
