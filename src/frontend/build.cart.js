loadCart();
async function loadCart() {
    const response = await fetch("/api/cart");
    const cartItems = await response.json();
    console.log(cartItems);
    let cardOverviewTableBody = document.getElementById("cart-overview");
    cartItems.forEach((product)=>{
        let itemrow = document.createElement("tr");
        let itemName = document.createElement("td");
        let itemImgRow = document.createElement("td");
        let itemPrice = document.createElement("td");
        let itemAmount = document.createElement("td");
        itemName.textContent = product[0].productName;
        itemImgRow.textContent = product[0].productName;
        itemPrice.textContent = product[0].specialOffer.toString();
        itemAmount.textContent = product[1].toString();
        itemrow.appendChild(itemName);
        itemrow.appendChild(itemImgRow);
        itemrow.appendChild(itemPrice);
        itemrow.appendChild(itemAmount);
        cardOverviewTableBody.appendChild(itemrow);
    });
}
