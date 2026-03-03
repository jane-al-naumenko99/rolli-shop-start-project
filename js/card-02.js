const cartWrapper = document.querySelector('.cart-wrapper');

// отслеживаем клик на странице 
window.addEventListener('click', function(event) { 

    // проверяем что клик был совершен по кнопке "в корзину" 
    if (event.target.hasAttribute('data-cart')) { 

    // находим карточку товара, внутри которой был совершен клик
   const card = event.target.closest('.card');
   // проверка console.log(card); собираем данные с этого товара и записываем их в единый объект productInfo
   const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.product-img').getAttribute('src'),
    title: card.querySelector('.item-title').innerText,
    itemsInBox: card.querySelector('[data-items-in-box]').innerText,
    weight: card.querySelector('.price__weight').innerText,
    price: card.querySelector('.price__currency').innerText,
    counter: card.querySelector('[data-counter]').innerText
   }
  
   // проверяем, есть ли уже такой товар в корзине
   const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
   if (itemInCart) {
	// если товар есть, то находим счётчик этого товара и увеличиваем его на количество, которое выбрал пользователь
	const counterElement = itemInCart.querySelector('[data-counter]');
	counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
   } else {
	// если товара нет в корзине, то добавляем его в корзину
  
   // шаблон для добавления товара в корзину; `` обтраные ковычки для использования шаблонных строк, внутри которых можно использовать переменные ${} и переносы строк
   const cartItemHTML = ` <div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`; 
   // отображаем товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }


	// сброс счетчика на единицу после добавления товара в корзину
	card.querySelector('[data-counter]').innerText = 1;

}

});


