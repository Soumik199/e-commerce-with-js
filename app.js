var products_data = [
  {
    id: 1,
    prod_name: "Surf Excell",
    img: "https://5.imimg.com/data5/QN/QF/MY-8609988/surf-excel-500x500.jpg",
    sp: 45,
    discount: "20% Off",
  },
  {
    id: 2,
    prod_name: "Surf Excell",
    img: "https://5.imimg.com/data5/QN/QF/MY-8609988/surf-excel-500x500.jpg",
    sp: 45,
    discount: "20% Off",
  },
  {
    id: 3,
    prod_name: "Surf Excell",
    img: "https://5.imimg.com/data5/QN/QF/MY-8609988/surf-excel-500x500.jpg",
    sp: 45,
    discount: "20% Off",
  },
  {
    id: 4,
    prod_name: "Surf Excell",
    img: "https://5.imimg.com/data5/QN/QF/MY-8609988/surf-excel-500x500.jpg",
    sp: 45,
    discount: "20% Off",
  },
  {
    id: 5,
    prod_name: "Surf Excell",
    img: "https://5.imimg.com/data5/QN/QF/MY-8609988/surf-excel-500x500.jpg",
    sp: 45,
    discount: "20% Off",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const myCart = document.querySelector(".my-cart");
  const cartCount = document.querySelector("#cart-count");

  const addedItems = [];

  function renderMyCart(product) {
    const li = document.createElement("LI");
    li.className = "flex justify-between";
    li.innerHTML = `
            <div>
              <img
                src=${product.img}
              />
            </div>
            <div>Rs: ${product.sp}</div>
            <button>Remove</button>`;
    myCart.append(li);
  }

  function renderProducts(products = []) {
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
      div.id = `product-${product.id}`;
      div.addEventListener("click", (e) => {
        if (e.target.className.includes("add-to-cart")) {
          doSomething(product);
        }
      });
      container.append(div);
    });
  }

  function doSomething(product) {
    addedItems.push(product);
    cartCount.innerHTML = `Cart: ${addedItems.length}`;
    renderMyCart(product);
  }

  renderProducts(products_data);
});
