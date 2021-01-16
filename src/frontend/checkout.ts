import { Calculations } from "./calculations.ts";

loadCheckout()

document.getElementById("checkout-form").addEventListener("submit", checkoutSuccessfull);

async function loadCheckout() {
    const btnCart = document.getElementById("btnCart");
    const totalPrice = document.createElement("span");
    totalPrice.id = "totalPriceSpan";
    totalPrice.innerText = `CHF ${await Calculations.getTotalPrice()}`;
    
    btnCart.appendChild(totalPrice);
}

async function checkoutSuccessfull() {
    await fetch(`http://localhost:8000/api/checkout`, {
        method: 'DELETE'
    });
    alert("Der Einkauf wurde erfolgreich abgeschlossen! - Ihre Bestellung wird in Kürze Berabeitet.");
    window.location.href = "http://localhost:8000/";
}