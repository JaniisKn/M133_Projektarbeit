// deno-lint-ignore-file
/// <reference lib="dom" />

import { Products } from "../common/products.ts";
console.log('guguuuuuseli');

export async function loadOverview() {
    console.log('guguuuuus');
    const response = await fetch("/api/persons");
    const products = Products;

    const overview = document.getElementById("overview");

    for (const product of products) {
        let productCard = document.createElement("card");
        let title = document.createElement("h1");
        let price = document.createElement("p");

        productCard.className = "card";
        title.innerHTML = product.name;
        price.innerHTML = product.price.toString();

        productCard.appendChild(title);
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