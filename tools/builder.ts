const [diagnostics, emit] = await Deno.bundle(
    "./src/frontend/app.ts",
);

await Deno.writeTextFile("./src/frontend/build.app.js", emit);

const [diagnostics2, emit2] = await Deno.bundle(
    "./src/frontend/product-detail.ts",
);

await Deno.writeTextFile("./src/frontend/build.product-detail.js", emit2);