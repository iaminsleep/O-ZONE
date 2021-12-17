//Инкапсуляция кода помогает замыкать и защищать код, объявленную внутри функции переменную нельзя использовать в других функциях, тем самым избегая ошибок
/*package-lock.json инициализируется при запуске приложения*/
const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  }

  const closeCart = () => {
    cartModal.style.display = '';
  }

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
}

export default cart;