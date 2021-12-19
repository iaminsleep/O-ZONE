function postData() {
  return fetch('https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      id: 0,
      title: "sdfsdfdsf",
      price: 3000,
      sale: false,
      img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
      hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
      category: "Игы и софтинка"
    }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8',}
  }).then(res => res.json())
}

export default postData;