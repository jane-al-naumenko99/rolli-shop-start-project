// Отслеживание кликов на счетчики
window.addEventListener('click', function(event) {
    const action = event.target.dataset.action;
    
        // Находим родительный счётчик (обордку счетчик)
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с числом счетчика
        const counter = counterWrapper.querySelector('[data-counter]');
        let currentValue = parseInt(counter.innerText);

    // Проверяем является ли элемент кнопка плюс или минус
    if (action === 'plus' || action === 'minus') {
        
        
        // Обновляем значение счетчика
        // Проверяем нажата ли кнопка МИНУС
        if (action === 'minus') {
            // Проверяем чтобы счётчик был больше 1
            if (currentValue > 1) {
                // Уменьшаем значение на 1
                counter.innerText = currentValue - 1;
            }
        } 
        // Проверяем нажата ли кнопка ПЛЮС
        else if (action === 'plus') {
            // Увеличиваем значение на 1
            counter.innerText = currentValue + 1;
        }
    }
});