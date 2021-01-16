class Calculations {
    static async getTotalPrice() {
        let price = 0;
        const responseMinicart = await fetch("/api/cart");
        const cartItems = await responseMinicart.json();
        cartItems.forEach((product)=>{
            price += Math.round(product[0].specialOffer * product[1] * 100) / 100;
        });
        console.log("total Preis: " + price);
        return price;
    }
}
loadOverview2();
async function loadOverview2() {
    const response = await fetch("/api/products");
    const products = await response.json();
    const overview = document.getElementById("overview");
    for (const product of products){
        let productCard = document.createElement("card");
        let title = document.createElement("h5");
        let normalPrice = document.createElement("del");
        let specialOffer = document.createElement("p");
        let picture = document.createElement("img");
        let link = document.createElement("a");
        productCard.className = "card";
        title.innerHTML = product.productName;
        normalPrice.innerHTML = product.normalPrice;
        specialOffer.innerHTML = product.specialOffer;
        picture.src = `./media/${product.imageName}`;
        picture.className = "product-picture-overview";
        link.href = `./product-detail.html?productId=${product.id}`;
        link.setAttribute("style", "color: black; text-decoration: none;");
        link.appendChild(productCard);
        productCard.appendChild(title);
        productCard.appendChild(picture);
        productCard.appendChild(normalPrice);
        productCard.appendChild(specialOffer);
        overview.appendChild(link);
    }
    const btnCart = document.getElementById("btnCart");
    const totalPrice = document.createElement("span");
    totalPrice.innerText = `${await Calculations.getTotalPrice()} CHF`;
    btnCart.appendChild(totalPrice);
}
const loadOverview1 = loadOverview2;
export { loadOverview1 as loadOverview };
