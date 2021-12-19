import getData from './getData';
import postData from './postData';
import renderGoods from './renderGoods';

const second = () => {
  const cartBtn = $('#cart');

  cartBtn.click(function() {

  })
  getData().then((data) => {
    renderGoods(data);
  })
}

export default second;