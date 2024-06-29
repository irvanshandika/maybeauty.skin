import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)) },
      { find: "@components", replacement: fileURLToPath(new URL("./src/components", import.meta.url)) },
      { find: "@icons", replacement: fileURLToPath(new URL("./src/components/icons", import.meta.url)) },
      { find: "@sections", replacement: fileURLToPath(new URL("./src/sections", import.meta.url)) },
      { find: "@translations", replacement: fileURLToPath(new URL("./src/translations", import.meta.url)) },
    ],
  },
});
