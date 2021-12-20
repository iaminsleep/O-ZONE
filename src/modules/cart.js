import {renderCart} from './render';

const goodsWrapper = $('.goods');

/*Инкапсуляция кода помогает замыкать и защищать код, 
объявленную внутри функции переменную нельзя использовать в других функциях, тем самым избегая ошибок*/

function cart() {
  const cartBtn = $('#cart');
  const cartModal = $('.cart');
  const cartCloseBtn = $('.cart-close');

  const toggleCart = () => {
    cartModal.toggleClass('cart-open');
    if(cartModal.hasClass('cart-open')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      renderCart(cart);
    }
  }

  cartBtn.click(toggleCart);
  cartCloseBtn.click(toggleCart);

  /*такой подход называется делегирование, вместо того чтобы вешать обработчик события на все кнопки, 
  вешается обработчик события только на контейнер с карточками, а там определяется ключ товара*/
  goodsWrapper.click(function(e) { 
    if($(e.target).hasClass('btn-primary')) {
      const goodCard = $(e.target).closest('.card');
      const goodId = goodCard.data("id");

      const goods = JSON.parse(localStorage.getItem('goods'));
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

      const goodItem = goods.find((item) => {
        return item.id === +goodId;
      })

      cart.push(goodItem);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  })
}

export default cart;