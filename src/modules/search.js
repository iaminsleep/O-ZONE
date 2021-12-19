import getData from "./getData";
import renderGoods from './renderGoods';
import {searchFilter} from './filters';

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input');

  searchInput.oninput = function (e) {
    const value = e.target.value;

    getData().then((data) => {
      renderGoods(searchFilter(data, value));
    });
  }
}

export default search;