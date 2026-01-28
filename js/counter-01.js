// находим кнопки и счётчик на странице
const ButtonMinus = document.querySelector('[data-action="minus"]');
const ButtonPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// отслеживаем клик на кнопке минус
ButtonMinus.addEventListener("click", function () {
    console.log('Minus click');

    // 
    if (parseInt(counter.innerText) > 1) //parseInt - преобразует строку в число, парсит только целое число
        counter.innerText = --counter.innerText;
});


// отслеживаем клик на кнопке плюс
ButtonPlus.addEventListener("click", function () {
   
    counter.innerText = ++counter.innerText; //innerText - может как записать текст через присвоение =, так и прочитать текст
});