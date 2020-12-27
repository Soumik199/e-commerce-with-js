function renderMyCategory(cat = []) {
    const category = document.querySelector("#lst")
    cat.forEach(el => {
        const li = document.createElement("LI")
        li.className = "li-1"
        li.innerHTML = `<a href=${el.url}>${el.cat_name}</a>`
        category.append(li);
    });

}

function fetchCategory() {
    fetch("../data/get-categories.json").then((res) => res.json()).then(data => renderMyCategory(data))


}