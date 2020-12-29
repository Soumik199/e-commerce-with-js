function renderProducts(products = []) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  products.forEach((product) => {
    const a = document.createElement("A");
    a.href = `/pd.html?productId=${product.id}`;
    a.innerHTML = `
                <div class="image flex flex-col">
                    <img
                        src=${product.img}
                    />
                    <span>${product.prod_name}</span>
                </div>
                <div class="flex justify-between pricing">
                    <span>Price Rs: ${product.sp}</span>
                    <span>Discount ${product.discount}</span>
                </div>
                <div class="controls">
                    <button class="add-to-cart">ADD TO CART</button>
                </div>
            `;
    a.className = "product flex justify-between flex-col";
    a.id = product.id;
    container.append(a);
  });
}
