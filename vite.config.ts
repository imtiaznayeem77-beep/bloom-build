import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Deploy to Vercel via Nitro (TanStack Start full-stack SSR adapter).
// `cloudflare: false` disables the bundled Cloudflare plugin so Nitro owns the build output.
export default defineConfig({
  cloudflare: false,
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});
