async function getData() { //str в скобках
  // return fetch(`https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`) REST API (с Firebase не работает)
  const res = await fetch('https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json');
  return await res.json();
}

export default getData;