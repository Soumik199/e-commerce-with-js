function renderMyCategory(cat = []) {
  const category = document.querySelector("#lst");
  const fragment = document.createDocumentFragment();
  cat.forEach((el) => {
    const li = document.createElement("LI");
    li.className = "li-1";
    li.innerHTML = `<a href=${el.url}>${el.cat_name}</a>`;
    // category.append(li) //10ms * 5 = 50ms
    fragment.append(li); // 0ms //memory insertion
  });
  category.append(fragment); // 10ms    //DOM insertion
}

function fetchCategory() {
  fetch("../data/get-categories.json")
    .then((res) => res.json())
    .then((data) => renderMyCategory(data));
}
