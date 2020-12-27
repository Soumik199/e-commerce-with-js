function renderProducts(products = []) {
  const container = document.querySelector(".container");
  products.forEach((product) => {
    const div = document.createElement("DIV");
    div.innerHTML = `
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
    div.className = "product flex flex-col";
    div.id = product.id;
    container.append(div);
  });
}
