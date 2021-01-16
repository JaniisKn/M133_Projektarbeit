import { Calculations } from "./calculations.ts";
loadCheckout()

async function loadCheckout() {
    const btnCart = document.getElementById("btnCart");
    const totalPrice = document.createElement("span");
    totalPrice.id = "totalPriceSpan";
    totalPrice.innerText = `CHF ${await Calculations.getTotalPrice()}`;
    
    btnCart.appendChild(totalPrice);
}