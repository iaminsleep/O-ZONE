import getData from "./getData";
import renderGoods from './renderGoods';

import {catalogFilter} from './filters';
import {priceFilter} from './filters';
import {hotSaleFilter} from './filters';

const catalog = () => {
  //поиск по категориям
  const btnCatalog = $('.catalog-button > button');
  const catalogModal = $('.catalog');
  const catalogModalItems = $('.catalog li');

  btnCatalog.click(() => {
    catalogModal.toggleClass('catalog-open');
  })

  catalogModalItems.each(function() {
    $(this).click(() => {
      getData().then((data) => {
        console.log($(this).text());
        renderGoods(catalogFilter(data, $(this).text()));
      });
    })
  })

  //поиск по фильтру цен
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');
  const discountCheckbox = $('#discount-checkbox');
  const checkboxSpan = $('.filter-check_checkmark');

  function filterPrice (minValue, maxValue) {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxSpan.hasClass('checked')), minValue, maxValue));
    });
  }

  minInput.value = '';
  maxInput.value = '';

  minInput.oninput = () => {
    filterPrice(minInput.value, maxInput.value)
  };

  maxInput.oninput = () => {
    filterPrice(minInput.value, maxInput.value)
  };

  discountCheckbox.change(function() {
    checkboxSpan.toggleClass('checked');
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxSpan.hasClass('checked')), minInput.value, maxInput.value));
    });
  })
}

export default catalog;