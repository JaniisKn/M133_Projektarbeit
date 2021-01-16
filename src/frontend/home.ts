// deno-lint-ignore-file
/// <reference lib="dom" />

import { Product } from "../backend/product.ts";
import { Calculations } from "./calculations.ts";

loadOverview();

export async function loadOverview() {
    const response = await fetch("/api/products");
    const products: Product[] = await response.json();

    
    const overview = document.getElementById("overview");
    
    for (const product of products) {
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