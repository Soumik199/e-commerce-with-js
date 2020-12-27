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
            <div>Rs: ${product.sp}</div>
            <button class="remove-cart">Remove</button>`;

  myCart.append(li);
}
