import getData from './getData';
import renderGoods from './renderGoods';
import search from './search';

const load = () => {
  getData().then((data) => {
    renderGoods(data);
  })

  search();
}

export default load;