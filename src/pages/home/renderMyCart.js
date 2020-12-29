function renderMyCart(product) {
  const myCart = document.querySelector("#cart-list");
  const li = document.createElement("LI");
  li.className = "flex justify-between";
  li.id = product.id;
  li.innerHTML = `
            <div>
              <img
                src=${product.img}
              />
            </div>
            <div class="center-aline-item">Rs: ${product.sp}</div>
            <button class="remove-cart center-aline-item">Remove</button>`;

  myCart.append(li);
}
