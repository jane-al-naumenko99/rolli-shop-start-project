function toggleCartStatus() { 
console.log('toggleCartStatus');

const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmptyBadge = document.querySelector('[data-cart-empty]');
const cartTotal = document.querySelector('.cart-total');
const orderForm = document.querySelector('#order-form');

cartWrapper.children // children - это псевдо массив, который содержит всех потомков элемента, в нашем случае всех товаров в корзине
if (cartWrapper.children.length > 0) {
    // если в корзине есть товары, то скрываем блок с надписью "Корзина пуста" и показываем блок с суммой заказа
    cartEmptyBadge.classList.add('none');
    cartWrapper.classList.remove('none');
    cartTotal.classList.remove('none');
    orderForm.classList.remove('none');
} else {
    // если в корзине нет товаров, то показываем блок с надписью "Корзина пуста" и скрываем блок с суммой заказа
    cartEmptyBadge.classList.remove('none');
    cartWrapper.classList.add('none');
    cartTotal.classList.add('none');
    orderForm.classList.add('none');
}
}
