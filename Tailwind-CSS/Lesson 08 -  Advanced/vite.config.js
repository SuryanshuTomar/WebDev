import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: "public",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "build/index.html"),
				// nested: resolve(__dirname, "build/index.html"),
			},
		},
	},
});
