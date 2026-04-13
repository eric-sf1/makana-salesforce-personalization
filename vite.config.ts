/// <reference types="vite/client" />
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub project page base path: /<repo-name>/ — must match repository name on GitHub */
const repoBase = "/makana-salesforce-personalization/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoBase : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
