import { Product } from "../backend/product.ts";
import { Calculations } from "./calculations.ts";

loadCart();

async function loadCart() {
    const response = await fetch("/api/cart");
    const cartItems: [Product, number][] = await response.json();

    let cardOverviewTableBody = document.getElementById("cart-overview");;

    cartItems.forEach(product => {
        let totalPrice = product[0].specialOffer * product[1];

        let productRow = document.createElement("tr");
        let productName = document.createElement("td");
        let productImgTd = document.createElement("td");
        let productPrice = document.createElement("td");
        let productAmountTd = document.createElement("td");
        let productPriceTotal = document.createElement("td");
        let productAmount = document.createElement("span");
        let productImg = document.createElement("img");
        let btnAddAmount = document.createElement("button");
        let btnRemoveAmount = document.createElement("button");

        productName.textContent = product[0].productName;
        productImg.src = `./media/${product[0].imageName}`;
        productImg.className = 'img-cart-overview'
        productPrice.textContent = `CHF ${product[0].specialOffer.toFixed(2)}`;
        productAmount.textContent = product[1].toString();
        productPriceTotal.textContent = `CHF ${totalPrice.toFixed(2)}`;
        btnAddAmount.innerText = "+";
        btnAddAmount.className = "btn-checkout-changeAmount";
        btnAddAmount.addEventListener(
            'click', 
            async function() {
                const productId = product[0].id;
                await fetch(`http://localhost:8000/api/addToCart/${productId}`, {
                    method: 'POST'
                });
                document.getElementById("totalPriceSpan").innerText = `${await Calculations.getTotalPrice()} CHF`;
                window.location.reload(true);
                return true;
            }
        );
        btnRemoveAmount.innerText = "-";
        btnRemoveAmount.className = "btn-checkout-changeAmount";
        btnRemoveAmount.addEventListener(
            'click', 
            async function() {
                const productId = product[0].id;
                await fetch(`http://localhost:8000/api/removeFromCart/${productId}`, {
                    method: 'DELETE'
                });
                document.getElementById("totalPriceSpan").innerText = `${await Calculations.getTotalPrice()} CHF`;
                window.location.reload(true);
                return true;
            }
        );
        
        productAmountTd.appendChild(btnRemoveAmount);
        productAmountTd.appendChild(productAmount);
        productAmountTd.appendChild(btnAddAmount);
        productImgTd.appendChild(productImg);
        productRow.appendChild(productName);
        productRow.appendChild(productImgTd);
        productRow.appendChild(productPrice);
        productRow.appendChild(productAmountTd);
        productRow.appendChild(productPriceTotal);

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

async function addToCart() {
 
}