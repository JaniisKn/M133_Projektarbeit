loadProductDetail();

async function loadProductDetail() {
    const productId = new URLSearchParams(window.location.search).get("productId");
        let response = await fetch(`http://localhost:8000/api/product-detail/${productId}`, {
            mode: 'no-cors'
        });
    let product = await response.json();

    document.getElementById("title-product").innerText = product.productName;
    document.getElementById("img-product").src = `../media/${product.imageName}`;
    document.getElementById("description-product").innerText = product.description;
    document.getElementById("price-product").innerText = "Preis: " + product.normalPrice + " CHF";
}
