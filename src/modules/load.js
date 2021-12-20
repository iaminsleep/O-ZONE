import {getData} from "./data";

import {renderGoods} from './render';

import search from './search';

const load = () => {
  getData().then((data) => {
    renderGoods(data);
  })

  search();
}

export default load;