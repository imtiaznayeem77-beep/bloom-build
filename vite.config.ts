import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  vite: {
    plugins: isVercel ? [nitro({ preset: "vercel" })] : [],
  },
});
