export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  })
}

export const catalogFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  })
}

export const priceFilter = (goods, minValue, maxValue) => {
  return goods.filter((goodsItem) => {
    if(minValue === '' && maxValue === '') {
      return goodsItem;
    }
    else if (minValue !== '' && maxValue !== '') {
      return goodsItem.price >= +minValue && goodsItem.price <= +maxValue;
    }
    else if (minValue !== '' && maxValue === '') {
      return goodsItem.price >= +minValue; //+ переводит в положительное числовое значение
    }
    else if (minValue === '' && maxValue !== '') {
      return goodsItem.price <= +maxValue;
    }
  })
}

export const hotSaleFilter = (goods, ifChecked) => {
  return goods.filter((goodsItem) => {
    if(ifChecked) {
      return goodsItem.sale === true;
    }
    else {
      return goodsItem;
    }
  })
}