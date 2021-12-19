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