function calcCartPriceAndDelivery() { 
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCostEl = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

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

    if (totalPriceEl) {
        totalPriceEl.innerText = totalPrice;
    }

    // считаем доставку и меняем платно, бесплатно

    if (cartDeliveryEl) {
        if (totalPrice > 0) {
            cartDeliveryEl.classList.remove('none');
        } else {
            cartDeliveryEl.classList.add('none');
        }
    }
    if (deliveryCostEl) {
        if (totalPrice >= 600) {
            deliveryCostEl.innerText = 'бесплатно';
        } else {
            deliveryCostEl.innerText = '250 ₽';
        }
    }

    return totalPrice;
} 

