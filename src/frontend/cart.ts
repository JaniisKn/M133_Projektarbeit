import { Product } from "../backend/product.ts";

loadCart();

async function loadCart() {
    const response = await fetch("/api/cart");
    const cartItems: [Product, number][] = await response.json();
    console.log(cartItems);

    let cardOverviewTableBody = document.getElementById("cart-overview");;

    for (let index = 0; index < cartItems.length; index++) {
            let itemrow = document.createElement("tr");
            let itemName = document.createElement("td");
            let itemImgRow = document.createElement("td");
            let itemPrice = document.createElement("td");
            let itemAmount = document.createElement("td");

            itemName.textContent = 'Test ' + index;
            itemImgRow.textContent = 'Testt ' + index;
            itemPrice.textContent = 'Testtt ' + index;
            itemAmount.textContent = index.toString();

            itemrow.appendChild(itemName);
            itemrow.appendChild(itemImgRow);
            itemrow.appendChild(itemPrice);
            itemrow.appendChild(itemAmount);

            cardOverviewTableBody.appendChild(itemrow);
    } 
}