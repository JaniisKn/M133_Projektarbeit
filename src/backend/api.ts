import { Router } from "https://deno.land/x/oak@v6.4.0/mod.ts";
import { Session } from "https://deno.land/x/session@1.1.0/mod.ts";
import { Product } from "./product.ts";

// Session konfigurieren und starten
const session = new Session({ framework: "oak" });
await session.init();
export const usableSession = session.use()(session);


const products: Product[] = JSON.parse(await Deno.readTextFile("./src/backend/products.json"));

const router = new Router();
router
    .get("/api/products", context => {
        context.response.body = products;
    })
    .get("/api/product-detail/:id", async (context) => {
        context.response.body = getProduct(context.params.id!);
    })


function getProduct(productId: string): Product {
    return products.find((product) => product.id == productId)!;
}

export const api = router.routes();