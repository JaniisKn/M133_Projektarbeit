// deno-lint-ignore-file
/// <reference lib="dom" />

import { Products } from "../common/products.ts";

loadOverview();

export async function loadOverview() {
    const response = await fetch("/api/persons");
    const products = Products;

    const overview = document.getElementById("overview");

    for (const product of products) {
        let productCard = document.createElement("card");
        let title = document.createElement("h5");
        let price = document.createElement("p");
        let picture = document.createElement("img");

        productCard.className = "card";
        title.innerHTML = product.name;
        price.innerHTML = product.price + '.-';
        picture.src = `./media/${product.img}`;
        picture.className = "product-picture-overview"

        productCard.appendChild(title);
        productCard.appendChild(picture);
        productCard.appendChild(price);
        overview.appendChild(productCard);
    }

    /*for (const person of persons) {
        list.innerHTML += `
            <li>
                <a href="./page2.html?personId=${person.id}">${person.firstName} ${person.lastName}</a>
            </li>
        `;
    }*/
}