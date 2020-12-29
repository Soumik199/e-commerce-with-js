document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("productId");
  fetch(`../../../data/get-pd.json?id=${productId}`)
    .then((res) => res.json())
    .then((data) => renderPD(data));
});
