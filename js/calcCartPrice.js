function calcCartPriceAndDelivery() { 
    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const amount = parseInt(amountEl.innerText) || 0;
        // Убираем из текста всё кроме цифр
        const price = parseInt(priceEl.innerText.replace(/[^0-9]/g, '')) || 0;
        const currentPrice = amount * price;
        totalPrice += currentPrice;
    });

    const totalPriceEl = document.querySelector('.total-price');
    if (totalPriceEl) {
        totalPriceEl.innerText = totalPrice;
    }
    return totalPrice;
}