function getData() { //str в скобках
  // return fetch(`https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`) REST API (с Firebase не работает)
  return fetch('https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
  .then((res) => {
    return res.json()
  })
}

export default getData;