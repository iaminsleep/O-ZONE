import {postData} from "./data";

import {renderCart} from './render';

const goodsWrapper = $('.goods');
const cartWrapper = $('.cart-wrapper');

/*Инкапсуляция кода помогает замыкать и защищать код, 
объявленную внутри функции переменную нельзя использовать в других функциях, тем самым избегая ошибок*/

function cart() {
  const cartBtn = $('#cart');
  const cartModal = $('.cart');
  const cartCloseBtn = $('.cart-close');
  const cartTotal = $('.cart-total > span');
  const cartConfirmBtn = $('.cart-confirm');
  const cartCounter = $('#cart > .counter');

  /* Functions */
  const toggleCart = () => {
    cartModal.toggleClass('cart-open');

    if(cartModal.hasClass('cart-open')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

      renderCart(cart);
      cartTotal.text(cart.reduce((sum, goodItem) => { //перебор массива cart, goodItem - каждый товар в массиве корзины
        return sum + goodItem.price;
      }, 0)); //0 - значение по дефолту
    }
  }

  /*такой подход называется делегирование, вместо того чтобы вешать обработчик события на все кнопки, 
  вешается обработчик события только на контейнер с карточками, а там определяется ключ товара*/
  const cartHandler = (btnTarget, action) => {
    if(btnTarget.hasClass('btn-primary')) {

      const goodCard = btnTarget.closest('.card');
      const goodId = goodCard.data("id");
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

      if(action === 'add') {
        const goods = JSON.parse(localStorage.getItem('goods'));
        const goodItem = goods.find((item) => {
          return item.id === +goodId;
        })
        cart.push(goodItem);
        cartCounter.text(parseInt(cartCounter.text())+1);
      }

      else if(action === 'remove') {
        const index = cart.findIndex((item) => {
          return item.id === +goodId;
        })
        cart.splice(index, 1);
        cartTotal.text(cart.reduce((sum, goodItem) => { //перебор массива cart, goodItem - каждый товар в массиве корзины
          return sum + goodItem.price;
        }, 0));
        renderCart(cart);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  /* Event Listeners */
  cartBtn.click(toggleCart);
  cartCloseBtn.click(toggleCart);

  goodsWrapper.click(function(e) {
    cartHandler($(e.target), 'add')
  });
  cartWrapper.click(function(e) {
    cartHandler($(e.target), 'remove');
  })

  cartConfirmBtn.click(function(e) {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    //отправка товаров на сервер, затем полная очистка корзины
    postData(cart).then(() => {
      localStorage.removeItem('cart');
      renderCart([]);
      cartTotal.text(0);
    });
  })
}

export default cart;