//Инкапсуляция кода помогает замыкать и защищать код, объявленную внутри функции переменную нельзя использовать в других функциях, тем самым избегая ошибок
function cart() {
  const cartBtn = $('#cart');
  const cartModal = $('.cart');
  const cartCloseBtn = $('.cart-close');

  const toggleCart = () => {
    cartModal.toggleClass('cart-open');
  }

  cartBtn.click(toggleCart)
  cartCloseBtn.click(toggleCart);
}

export default cart;