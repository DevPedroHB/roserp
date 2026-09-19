import { build } from "esbuild";
import { mkdir, rm } from "node:fs/promises";

await rm("dist/client", { recursive: true, force: true });
await rm("dist/server", { recursive: true, force: true });

await mkdir("dist/client", { recursive: true });
await mkdir("dist/server", { recursive: true });

const common = {
    bundle: true,
    platform: "neutral",
    target: "es2022",
    format: "iife",
    minify: false,
    sourcemap: false,
};

await build({
    ...common,
    entryPoints: ["client/index.ts"],
    outfile: "dist/client/index.js",
});

await build({
    ...common,
    entryPoints: ["server/index.ts"],
    outfile: "dist/server/index.js",
});

console.log("[RoseRP] FiveM client/server build completed.");
