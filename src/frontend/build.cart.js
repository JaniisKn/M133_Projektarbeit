loadCart();
async function loadCart() {
    const response = await fetch("/api/cart");
    const cartItems = await response.json();
    let total = 0;
    let cardOverviewTableBody = document.getElementById("cart-overview");
    cartItems.forEach((product)=>{
        let totalPrice = Math.round(product[0].specialOffer * product[1] * 100) / 100;
        total += totalPrice;
        let productRow = document.createElement("tr");
        let productName = document.createElement("td");
        let productImgTd = document.createElement("td");
        let productPrice = document.createElement("td");
        let productAmount = document.createElement("td");
        let productPriceTotal = document.createElement("td");
        let productImg = document.createElement("img");
        productName.textContent = product[0].productName;
        productImg.src = `./media/${product[0].imageName}`;
        productImg.className = 'img-cart-overview';
        productPrice.textContent = product[0].specialOffer.toString();
        productAmount.textContent = product[1].toString();
        productPriceTotal.textContent = totalPrice.toString();
        productImgTd.appendChild(productImg);
        productRow.appendChild(productName);
        productRow.appendChild(productImgTd);
        productRow.appendChild(productPrice);
        productRow.appendChild(productAmount);
        productRow.appendChild(productPriceTotal);
        cardOverviewTableBody.appendChild(productRow);
    });
    const tdTotalPrice = document.getElementById("cart-total");
    tdTotalPrice.textContent = total.toString();
}
