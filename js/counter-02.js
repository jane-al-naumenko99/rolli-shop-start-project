// Отслеживание кликов на счетчики
window.addEventListener('click', function(event) {
    const action = event.target.dataset.action;
    // значение счётчика и элемент будем определять внутри блока, чтобы избежать
    // повторных объявлений и проблем со скопом
    let counterElement;
    let currentValue;
    
    // проверяем клик строго по кнопкам плюс или минус; || - или, === - строгое сравнение
    if (action === 'plus' || action === 'minus') {
        // Находим родительный счётчик (обёртку счётчика)
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с числом счетчика
        counterElement = counterWrapper.querySelector('[data-counter]');
        currentValue = parseInt(counterElement.innerText);
    }

       
    // Проверяем является ли элемент кнопка плюс или минус
    if (action === 'plus' || action === 'minus') {

        // Обновляем значение счетчика
        // Проверяем нажата ли кнопка МИНУС
        if (action === 'minus') {
            // Если счётчик больше 1 — уменьшаем
            if (currentValue > 1) {
                counterElement.innerText = currentValue - 1;
                if (typeof calcCartPriceAndDelivery === 'function') calcCartPriceAndDelivery();
            } else if (event.target.closest('.cart-wrapper') && currentValue === 1) {
                // Если это товар в корзине и количество = 1, удаляем
                event.target.closest('.cart-item').remove();
                // Отображение статуса корзины
                if (typeof toggleCartStatus === 'function') toggleCartStatus();
                if (typeof calcCartPriceAndDelivery === 'function') calcCartPriceAndDelivery();
            }
        }
        // Проверяем нажата ли кнопка ПЛЮС
        else if (action === 'plus') {
            // Увеличиваем значение на 1
            counterElement.innerText = currentValue + 1;
            if (typeof calcCartPriceAndDelivery === 'function') calcCartPriceAndDelivery();
        }

        // Проверяем, что клик был совершен внутри корзины
        if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
            // Перерасчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();         
            
        }   



    }
});