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
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
        appData.MoneyPerday = (appData.budget/30).toFixed();
        alert("Бюждет за 1 дней = " + appData.MoneyPerday);
    },
    detectLevel: function(){
        if(appData.MoneyPerday < 100){
            console.log("Минимальный уровень достатка");
        }else if(appData.MoneyPerday > 100 && appData.MoneyPerday < 2000){
            console.log("Средний уровень достатка");
        }else if(appData.MoneyPerday > 2000){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i+1] = a;
            }else{
                i = i - 1;
            }     
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита = " + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");

        if((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length < 100){
            appData.income = items.split(', ');
        }
        
        let addition =  appData.income.push(prompt('Может что-то еще?'));

        if((typeof(addition)) === 'string' && (typeof(addition)) != null && addition != '' && addition.length < 100){
            appData.income.push(addition);
        }
        
        //let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");
        //appData.income = items.split(', ');
        //appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.income.forEach(function(item, i, mass){
            console.log("Способы доп. заработка: " + item);
        });
    },

    shohObkectkeys: function(){
        for(let key in appData){
            console.log(key + ' имеет значение ' + appData[key]);
        }
    }
};