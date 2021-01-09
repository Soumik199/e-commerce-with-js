document.addEventListener("DOMContentLoaded", () => {
  const myCart = document.querySelector("#cart-list");
  const cartCount = document.querySelector("#cart-count");
  const total_cost = document.querySelector("#total");
  const container = document.querySelector(".container");
  const sortBy = document.querySelector("#sort-by");
  const filterby = document.querySelector("#filter-by");

  initializePage();
  fetchCategory();

  let addedItems = [];

  myCart.addEventListener("click", (event) => {
    if (event.target.className.includes("remove-cart")) {
      const id = event.target.parentNode.id;
      addedItems = addedItems.filter((item) => item.id != id);
      myCart.innerHTML = ``;
      addedItems.forEach((item) => renderMyCart(item));
      if (addedItems.length == 0) {
        renderTotalCost();
      }
      cartCount.innerHTML = `Cart: ${addedItems.length}`;
    }
  });

  sortBy.addEventListener("change", (e) => {
    const value = e.target.value;
    const prodData = allData[0];
    if (value === "l_h") {
      const prodDataShorted = prodData.sort((a, b) => a.sp - b.sp);
      renderProducts(prodDataShorted);
    } else if (value === "h_l") {
      const prodDataShorted = prodData.sort((a, b) => b.sp - a.sp);
      renderProducts(prodDataShorted);
    }
  });
  console.log(filterby)
  filterby.addEventListener("change",(e)=>{
    const value = e.target.value;
    console.log(e)
    console.log(value)
    const prodData = allData[0];
    if(value === "price1"){
      const prodDatafilter = prodData.filter(prodData => prodData.sp > 2001);
      console.log(prodDatafilter)
      renderProducts(prodDatafilter);
    }
  })

  function renderTotalCost() {
    var totalCost = 0;
    addedItems.forEach((item) => (totalCost = totalCost + item.sp));
    if (totalCost === 0) {
      total_cost.removeChild(total_cost.firstChild);
    } else {
      total_cost.innerHTML = `<p> Total: ${totalCost} </p>`;
    }
  }

  container.addEventListener("click", (e) => {
    if (e.target.className.includes("add-to-cart")) {
      const id = parseInt(e.target.parentNode.parentNode.id);
      const productToAdd = products_data.find((prod) => prod.id === id);
      addedItems.push(productToAdd);
      cartCount.innerHTML = `Cart = ${addedItems.length}`;
      renderMyCart(productToAdd);
      renderTotalCost();
    }
  });
});
