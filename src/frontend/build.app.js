loadOverview2();
async function loadOverview2() {
    const response = await fetch("/api/products");
    const products = await response.json();
    const overview = document.getElementById("overview");
    for (const product of products){
        let productCard = document.createElement("card");
        let title = document.createElement("h5");
        let price = document.createElement("p");
        let picture = document.createElement("img");
        let link = document.createElement("a");
        productCard.className = "card";
        title.innerHTML = product.productName;
        price.innerHTML = product.normalPrice + '.-';
        picture.src = `./media/${product.imageName}`;
        picture.className = "product-picture-overview";
        link.href = `./product-detail.html?productId=${product.id}`;
        link.setAttribute("style", "color: black; text-decoration: none;");
        link.appendChild(productCard);
        productCard.appendChild(title);
        productCard.appendChild(picture);
        productCard.appendChild(price);
        overview.appendChild(link);
    }
}
const loadOverview1 = loadOverview2;
export { loadOverview1 as loadOverview };
