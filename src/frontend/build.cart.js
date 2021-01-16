class Calculations {
    static async getTotalPrice() {
        let price = 0;
        const responseMinicart = await fetch("/api/cart");
        const cartItems = await responseMinicart.json();
        cartItems.forEach((product)=>{
            price += product[0].specialOffer * product[1];
        });
        return price.toFixed(2);
    }
}
loadCart();
async function loadCart() {
    const response = await fetch("/api/cart");
    const cartItems = await response.json();
    let cardOverviewTableBody = document.getElementById("cart-overview");
    cartItems.forEach((product)=>{
        let totalPrice = product[0].specialOffer * product[1];
        let productRow = document.createElement("tr");
        let productName = document.createElement("td");
        let productImgTd = document.createElement("td");
        let productPrice = document.createElement("td");
        let productAmount = document.createElement("td");
        let productPriceTotal = document.createElement("td");
        let deleteTd = document.createElement("td");
        let productImg = document.createElement("img");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.addEventListener("click", removeFromCart);
        productName.textContent = product[0].productName;
        productImg.src = `./media/${product[0].imageName}`;
        productImg.className = 'img-cart-overview';
        productPrice.textContent = `CHF ${product[0].specialOffer.toFixed(2)}`;
        productAmount.textContent = product[1].toString();
        productPriceTotal.textContent = `CHF ${totalPrice.toFixed(2)}`;
        deleteTd.appendChild(deleteBtn);
        productImgTd.appendChild(productImg);
        productRow.appendChild(productName);
        productRow.appendChild(productImgTd);
        productRow.appendChild(productPrice);
        productRow.appendChild(productAmount);
        productRow.appendChild(productPriceTotal);
        productRow.appendChild(deleteTd);
        cardOverviewTableBody.appendChild(productRow);
    });
    const tdTotalPrice = document.getElementById("cart-total");
    tdTotalPrice.textContent = `CHF ${(await Calculations.getTotalPrice()).toString()}`;
    const btnCart = document.getElementById("btnCart");
    const totalPrice = document.createElement("span");
    totalPrice.id = "totalPriceSpan";
    totalPrice.innerText = `CHF ${await Calculations.getTotalPrice()}`;
    btnCart.appendChild(totalPrice);
}
async function removeFromCart() {
    const response = await fetch(`/api/cart/remove/002`);
}
