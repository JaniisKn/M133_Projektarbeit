import { send, Context } from "https://deno.land/x/oak@v6.4.0/mod.ts";

// deno-lint-ignore no-explicit-any
export const fileserver = async (context: Context<Record<string, any>>) => {
    await send(
        context,
        context.request.url.pathname,
        { 
            root: `${Deno.cwd()}/src/frontend`,
            index: "home.html"
    });
};