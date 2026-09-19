import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    const isServer = mode === "server";

    return {
        build: {
            outDir: isServer ? "dist/server" : "dist/client",
            emptyOutDir: true,
            lib: {
                entry: isServer ? "server/index.ts" : "client/index.ts",
                formats: ["iife"],
                fileName: () => "index.js",
            },
            rollupOptions: {
                output: {
                    inlineDynamicImports: true,
                },
            },
        },
    };
});
