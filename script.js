'use strict'

let money,
    time;

let expenses_question,
    expenses_answer;

money = +prompt("Ваш бюджет на месяц ($)", "100");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    /*
    while (!((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50)) {
        console.log("done");
        appData.expenses[a] = b;
    }
    */
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }else{

    } 
     
}

console.log(appData.timeData);
console.log(appData.budget);

appData.MoneyPerday = appData.budget/30

alert("Бюждет за 1 дней = " + appData.MoneyPerday);
