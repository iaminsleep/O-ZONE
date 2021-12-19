import cart from "./modules/cart"
import load from "./modules/load";
import search from "./modules/search";
import catalog from "./modules/catalog";

$(document).ready(function () {
  cart();
  load();
  search();
  catalog();
});
