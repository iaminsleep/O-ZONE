/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n\r\n\r\n\r\n\r\n\r\n$(document).ready(function () {\r\n  (0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://ozone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n\r\n\r\nconst goodsWrapper = $('.goods');\r\nconst cartWrapper = $('.cart-wrapper');\r\n\r\n/*Инкапсуляция кода помогает замыкать и защищать код, \r\nобъявленную внутри функции переменную нельзя использовать в других функциях, тем самым избегая ошибок*/\r\n\r\nfunction cart() {\r\n  const cartBtn = $('#cart');\r\n  const cartModal = $('.cart');\r\n  const cartCloseBtn = $('.cart-close');\r\n  const cartTotal = $('.cart-total > span');\r\n  const cartConfirmBtn = $('.cart-confirm');\r\n  const cartCounter = $('#cart > .counter');\r\n\r\n  /* Functions */\r\n  const toggleCart = () => {\r\n    cartModal.toggleClass('cart-open');\r\n\r\n    if(cartModal.hasClass('cart-open')) {\r\n      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderCart)(cart);\r\n      cartTotal.text(cart.reduce((sum, goodItem) => { //перебор массива cart, goodItem - каждый товар в массиве корзины\r\n        return sum + goodItem.price;\r\n      }, 0)); //0 - значение по дефолту\r\n    }\r\n  }\r\n\r\n  /*такой подход называется делегирование, вместо того чтобы вешать обработчик события на все кнопки, \r\n  вешается обработчик события только на контейнер с карточками, а там определяется ключ товара*/\r\n  const cartHandler = (btnTarget, action) => {\r\n    if(btnTarget.hasClass('btn-primary')) {\r\n\r\n      const goodCard = btnTarget.closest('.card');\r\n      const goodId = goodCard.data(\"id\");\r\n      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n\r\n      if(action === 'add') {\r\n        const goods = JSON.parse(localStorage.getItem('goods'));\r\n        const goodItem = goods.find((item) => {\r\n          return item.id === +goodId;\r\n        })\r\n        cart.push(goodItem);\r\n        cartCounter.text(parseInt(cartCounter.text())+1);\r\n      }\r\n\r\n      else if(action === 'remove') {\r\n        const index = cart.findIndex((item) => {\r\n          return item.id === +goodId;\r\n        })\r\n        cart.splice(index, 1);\r\n        cartTotal.text(cart.reduce((sum, goodItem) => { //перебор массива cart, goodItem - каждый товар в массиве корзины\r\n          return sum + goodItem.price;\r\n        }, 0));\r\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderCart)(cart);\r\n      }\r\n\r\n      localStorage.setItem('cart', JSON.stringify(cart));\r\n    }\r\n  }\r\n\r\n  /* Event Listeners */\r\n  cartBtn.click(toggleCart);\r\n  cartCloseBtn.click(toggleCart);\r\n\r\n  goodsWrapper.click(function(e) {\r\n    cartHandler($(e.target), 'add')\r\n  });\r\n  cartWrapper.click(function(e) {\r\n    cartHandler($(e.target), 'remove');\r\n  })\r\n\r\n  cartConfirmBtn.click(function(e) {\r\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n    //отправка товаров на сервер, затем полная очистка корзины\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.postData)(cart).then(() => {\r\n      localStorage.removeItem('cart');\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderCart)([]);\r\n      cartTotal.text(0);\r\n    });\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  //поиск по категориям\r\n  const btnCatalog = $('.catalog-button > button');\r\n  const catalogModal = $('.catalog');\r\n  const catalogModalItems = $('.catalog li');\r\n\r\n  btnCatalog.click(() => {\r\n    catalogModal.toggleClass('catalog-open');\r\n  })\r\n\r\n  catalogModalItems.each(function() {\r\n    $(this).click(() => {\r\n      ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n        console.log($(this).text());\r\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.catalogFilter)(data, $(this).text()));\r\n      });\r\n    })\r\n  })\r\n\r\n  //поиск по фильтру цен\r\n  const minInput = document.querySelector('#min');\r\n  const maxInput = document.querySelector('#max');\r\n  const discountCheckbox = $('#discount-checkbox');\r\n  const checkboxSpan = $('.filter-check_checkmark');\r\n\r\n  function filterPrice (minValue, maxValue) {\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxSpan.hasClass('checked')), minValue, maxValue));\r\n    });\r\n  }\r\n\r\n  minInput.value = '';\r\n  maxInput.value = '';\r\n\r\n  minInput.oninput = () => {\r\n    filterPrice(minInput.value, maxInput.value)\r\n  };\r\n\r\n  maxInput.oninput = () => {\r\n    filterPrice(minInput.value, maxInput.value)\r\n  };\r\n\r\n  discountCheckbox.change(function() {\r\n    checkboxSpan.toggleClass('checked');\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxSpan.hasClass('checked')), minInput.value, maxInput.value));\r\n    });\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nasync function getData() { //str в скобках\r\n  // return fetch(`https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`) REST API (с Firebase не работает)\r\n  const res = await fetch('https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json');\r\n  return await res.json();\r\n}\r\n\r\nfunction postData(cart) {\r\n  return fetch('https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/userorder.json', {\r\n    method: 'POST',\r\n    body: JSON.stringify(cart),\r\n    headers: { 'Content-Type': 'application/json; charset=UTF-8',}\r\n  }).then(res => res.json())\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://ozone/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"catalogFilter\": () => (/* binding */ catalogFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n  })\r\n}\r\n\r\nconst catalogFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value;\r\n  })\r\n}\r\n\r\nconst priceFilter = (goods, minValue, maxValue) => {\r\n  return goods.filter((goodsItem) => {\r\n    if(minValue === '' && maxValue === '') {\r\n      return goodsItem;\r\n    }\r\n    else if (minValue !== '' && maxValue !== '') {\r\n      return goodsItem.price >= +minValue && goodsItem.price <= +maxValue;\r\n    }\r\n    else if (minValue !== '' && maxValue === '') {\r\n      return goodsItem.price >= +minValue; //+ переводит в положительное числовое значение\r\n    }\r\n    else if (minValue === '' && maxValue !== '') {\r\n      return goodsItem.price <= +maxValue;\r\n    }\r\n  })\r\n}\r\n\r\nconst hotSaleFilter = (goods, ifChecked) => {\r\n  return goods.filter((goodsItem) => {\r\n    if(ifChecked) {\r\n      return goodsItem.sale === true;\r\n    }\r\n    else {\r\n      return goodsItem;\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://ozone/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./src/modules/search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderGoods)(data);\r\n  })\r\n\r\n  ;(0,_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozone/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGoods\": () => (/* binding */ renderGoods),\n/* harmony export */   \"renderCart\": () => (/* binding */ renderCart)\n/* harmony export */ });\nconst renderGoods = (goodsData) => {\r\n  const goodsWrapper = $('.goods');  //jQuery замена querySelector или querySelectorAll\r\n\r\n  localStorage.setItem('goods', JSON.stringify(goodsData));\r\n\r\n  goodsWrapper.html(''); //перед рендером, удаляет прошлую вёрстку, чтобы избежать дублирвоания. //jQuery замена innerHTML\r\n\r\n  $.each(goodsData, function() { //jQuery замена forEach\r\n    //jQuery замена insertAdjacentHTML\r\n    goodsWrapper.append(`\r\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-id=\"${this.id}\">\r\n          ${this.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n          <div class=\"card-img-wrapper\">\r\n            <span class=\"card-img-top\" style=\" background-image: url('${this.img}')\"></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${this.price}</div>\r\n            <h5 class=\"card-title\">${this.title}</h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    `)\r\n  })\r\n}\r\n\r\nconst renderCart = (cartData) => {\r\n  const cartWrapper = $('.cart-wrapper');  //jQuery замена querySelector или querySelectorAll\r\n  cartWrapper.html(''); //перед рендером, удаляет прошлую вёрстку, чтобы избежать дублирвоания. //jQuery замена innerHTML\r\n\r\n  if(cartData.length === 0) {\r\n    cartWrapper.append(`\r\n      <div id=\"cart-empty\">Ваша корзина пока пуста</div>\r\n    `)\r\n  }\r\n  else {\r\n    $.each(cartData, function() { //jQuery замена forEach\r\n    //jQuery замена insertAdjacentHTML\r\n    cartWrapper.append(`\r\n        <div class=\"card\" data-id=\"${this.id}\">\r\n          ${this.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n          <div class=\"card-img-wrapper\">\r\n            <span class=\"card-img-top\" style=\" background-image: url('${this.img}')\"></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${this.price}</div>\r\n            <h5 class=\"card-title\">${this.title}</h5>\r\n            <button class=\"btn btn-primary\">Удалить</button>\r\n          </div>\r\n        </div>\r\n    `)\r\n  })\r\n  }\r\n}\n\n//# sourceURL=webpack://ozone/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector('.search-wrapper_input');\r\n\r\n  searchInput.oninput = function (e) {\r\n    const value = e.target.value;\r\n\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozone/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;