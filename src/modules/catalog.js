import getData from "./getData";
import renderGoods from './renderGoods';
import {catalogFilter} from './filters';

const catalog = () => {
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
}

export default catalog;