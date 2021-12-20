export const renderGoods = (goodsData) => {
  const goodsWrapper = $('.goods');  //jQuery замена querySelector или querySelectorAll

  localStorage.setItem('goods', JSON.stringify(goodsData));

  goodsWrapper.html(''); //перед рендером, удаляет прошлую вёрстку, чтобы избежать дублирвоания. //jQuery замена innerHTML

  $.each(goodsData, function() { //jQuery замена forEach
    //jQuery замена insertAdjacentHTML
    goodsWrapper.append(`
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card" data-id="${this.id}">
          ${this.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
          <div class="card-img-wrapper">
            <span class="card-img-top" style=" background-image: url('${this.img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${this.price}</div>
            <h5 class="card-title">${this.title}</h5>
            <button class="btn btn-primary">В корзину</button>
          </div>
        </div>
      </div>
    `)
  })
}

export const renderCart = (cartData) => {
  const cartWrapper = $('.cart-wrapper');  //jQuery замена querySelector или querySelectorAll
  cartWrapper.html(''); //перед рендером, удаляет прошлую вёрстку, чтобы избежать дублирвоания. //jQuery замена innerHTML

  if(cartData.length === 0) {
    cartWrapper.append(`
      <div id="cart-empty">Ваша корзина пока пуста</div>
    `)
  }
  else {
    $.each(cartData, function() { //jQuery замена forEach
    //jQuery замена insertAdjacentHTML
    cartWrapper.append(`
        <div class="card" data-id="${this.id}">
          ${this.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
          <div class="card-img-wrapper">
            <span class="card-img-top" style=" background-image: url('${this.img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${this.price}</div>
            <h5 class="card-title">${this.title}</h5>
            <button class="btn btn-primary">В корзину</button>
          </div>
        </div>
    `)
  })
  }
}