import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tac0de.github.io",
  base: "/krontium",
  integrations: [react()],
});
