var allData = [];

function initializePage() {
  const cartCount = document.querySelector("#cart-count");
  const urls = ["../data/get-products.json", "../data/get-cart.json"];
  const urlPromises = urls.map((url) => fetch(url));
  Promise.all(urlPromises)
    .then((res) => Promise.all(res.map((r) => r.json())))
    .then((data) =>
      data.forEach((d, i) => {
        allData.push(d);
        if (i === 0) {
          renderProducts(d);
        }
        if (i === 1) {
          d.forEach((prod) => renderMyCart(prod));
          cartCount.innerHTML = `Cart: ${d.length}`;
        }
      })
    );
}
