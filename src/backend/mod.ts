import { Application, send } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";

const app = new Application();

// Logger
app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(`${context.request.method} ${context.request.url} - ${rt}`);
});

// Timing
app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
    const filePath = context.request.url.pathname;
    await send(context, filePath, {
      root: `${Deno.cwd()}./src/frontend`,
    });
})

console.log('Webseite verfügbar auf http://localhost:8000');

await app.listen({ port: 8000 });