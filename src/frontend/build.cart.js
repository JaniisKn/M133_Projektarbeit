loadCart();
async function loadCart() {
    const response = await fetch("/api/cart");
    const cartItems = await response.json();
    console.log(cartItems);
    let cardOverviewTableBody = document.getElementById("cart-overview");
    cartItems.forEach((product)=>{
        let productRow = document.createElement("tr");
        let productName = document.createElement("td");
        let productImgTd = document.createElement("td");
        let productPrice = document.createElement("td");
        let productAmount = document.createElement("td");
        let productImg = document.createElement("img");
        productName.textContent = product[0].productName;
        productImg.src = `./media/${product[0].imageName}`;
        productImg.className = 'img-cart-overview';
        productPrice.textContent = product[0].specialOffer.toString();
        productAmount.textContent = product[1].toString();
        productImgTd.appendChild(productImg);
        productRow.appendChild(productName);
        productRow.appendChild(productImgTd);
        productRow.appendChild(productPrice);
        productRow.appendChild(productAmount);
        cardOverviewTableBody.appendChild(productRow);
    });
}
