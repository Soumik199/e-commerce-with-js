function renderPD(productData = {}) {
  const section = document.createElement("section");
  section.innerHTML = `<img
      src=${productData.image_url}
    />
    <div class="flex flex-col">
      <div class="flex justify-start">
        <span class="m-8"> Price Rs: ${productData.sp} </span>
        <span class="m-8"> MRP Rs: ${productData.mrp} </span>
      </div>
      <div class="flex justify-start">
        <button class="btn primary raised m-8">ADD TO CART</button>
        <button class="btn success raised m-8">SAVE FOR LATER</button>
      </div>
    </div>`;
  section.className = "pd-wrapper flex jusitfy-between";
  const main = document.getElementById("main");
  main.append(section);
}
