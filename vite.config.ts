import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: Vercel (via Nitro, which TanStack Start uses under the hood).
// `cloudflare: false` disables the Cloudflare Workers plugin so the build
// produces a standard Vercel `.vercel/output` directory.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
