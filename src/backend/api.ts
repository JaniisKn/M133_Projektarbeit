import { Router } from "https://deno.land/x/oak@v6.4.0/mod.ts";
import { Session } from "https://deno.land/x/session@1.1.0/mod.ts";
import { Product } from "./product.ts";

// Session konfigurieren und starten
const session = new Session({ framework: "oak" });
await session.init();
export const usableSession = session.use()(session);

let cart: [Product, number][] = [];
const products: Product[] = JSON.parse(await Deno.readTextFile("./src/backend/products.json"));

const router = new Router();

router.get("/api/products", context => {
    context.response.body = products;
});

router.get("/api/product-detail/:id", (context) => {
    context.response.body = getProduct(context.params.id!);
});

router.post("/api/addToCart/:id", (context) => {
    let isProductInCart = false;
    let product = getProduct(context.params.id!);
    if (cart.length == 0) {
        cart.push([product, 1]);
    } else {
        cart.forEach(productInCart => {
            if (productInCart[0] == product) {
                productInCart[1]++;
                isProductInCart = true;
            }
        });
        if (!isProductInCart) {
            cart.push([product, 1]); 
        }
    }

    context.response.body = cart;
    context.response.status = 200;
});

router.get("/api/cart", (context) => {
    context.response.body = cart;
});

function getProduct(productId: string): Product {
    return products.find((product) => product.id == productId)!;
}

router.delete("/api/removeFromCart/:id", (context) => {
    let position: number = 0; 
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0].id == context.params.id!) {
            if (cart[i][1] > 1) {
                cart[i][1]--;
            } else {
                cart.splice(i, 1);
            }
        }
    }

    context.response.status = 200;
});

router.delete("/api/checkout", (context) => {
    cart = [];

    context.response.status = 200;
});

export const api = router.routes();