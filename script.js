let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц ($)", "100");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц ($)", "100");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD");
}
start();

let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        }else{
            i = i - 1;
        }     
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.MoneyPerday = (appData.budget/30).toFixed();
    alert("Бюждет за 1 дней = " + appData.MoneyPerday);
}
detectDayBudget();

function detectLevel(){
    if(appData.MoneyPerday < 100){
        console.log("Минимальный уровень достатка");
    }else if(appData.MoneyPerday > 100 && appData.MoneyPerday < 2000){
        console.log("Средний уровень достатка");
    }else if(appData.MoneyPerday > 2000){
        console.log("Высокий уровень достатка");
    }else{
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[i+1] = a;
        }else{
            i = i - 1;
        }     
    }
}
chooseOptExpenses();

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход с Вашего депозита = " + appData.monthIncome);
    }
}
checkSavings();