import { Product } from "../backend/product.ts";

export class Calculations {

    static async getTotalPrice() {
    let price = 0;

    const responseMinicart = await fetch("/api/cart");
    const cartItems: [Product, number][] = await responseMinicart.json();

    cartItems.forEach(product => {
        price +=  product[0].specialOffer * product[1];
    });

    console.log("total Preis: " + price);
    return Math.round(price * 100) / 100;
    }
}