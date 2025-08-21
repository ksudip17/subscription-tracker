import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // REPLACE THIS LINE:
      // globals: globals.browser // ❌ Wrong for a Node.js project
      // WITH THIS LINE:
      globals: {
        ...globals.node, // ✅ Correct for a Node.js project
      },
    },
  },
]);