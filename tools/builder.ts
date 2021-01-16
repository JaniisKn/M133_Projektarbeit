const [diagnostics, emit] = await Deno.bundle(
    "./src/frontend/app.ts",
);

await Deno.writeTextFile("./src/frontend/build.app.js", emit);

const [diagnostics2, emit2] = await Deno.bundle(
    "./src/frontend/product-detail.ts",
);

await Deno.writeTextFile("./src/frontend/build.product-detail.js", emit2);

const [diagnostics3, emit3] = await Deno.bundle(
    "./src/frontend/cart.ts",
);

await Deno.writeTextFile("./src/frontend/build.cart.js", emit3);

const [diagnostics4, emit4] = await Deno.bundle(
    "./src/frontend/checkout.ts",
);

await Deno.writeTextFile("./src/frontend/build.checkout.js", emit4);