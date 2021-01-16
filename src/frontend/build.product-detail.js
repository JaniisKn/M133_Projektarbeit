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
loadProductDetail();
document.getElementById("product-detail-cart").addEventListener("click", addToCart);
async function loadProductDetail() {
    const productId = new URLSearchParams(window.location.search).get("productId");
    let response = await fetch(`http://localhost:8000/api/product-detail/${productId}`, {
        mode: 'no-cors'
    });
    let product = await response.json();
    document.getElementById("title-product").innerText = product.productName;
    document.getElementById("img-product").src = `../media/${product.imageName}`;
    document.getElementById("description-product").innerText = product.description;
    document.getElementById("price-product").innerText = "Preis: " + product.specialOffer + " CHF";
    const btnCart = document.getElementById("btnCart");
    const totalPrice = document.createElement("span");
    totalPrice.id = "totalPriceSpan";
    totalPrice.innerText = `${await Calculations.getTotalPrice()} CHF`;
    btnCart.appendChild(totalPrice);
    return true;
}
async function addToCart() {
    console.log("Dem Einkaufswagen hinzugefügt");
    const productId = new URLSearchParams(window.location.search).get("productId");
    await fetch(`http://localhost:8000/api/addToCart/${productId}`, {
        method: 'POST'
    });
    document.getElementById("totalPriceSpan").innerText = `${await Calculations.getTotalPrice()} CHF`;
    return true;
}
