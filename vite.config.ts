import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/tests/setup.ts",

		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			reportsDirectory: "./coverage",
			exclude: ["node_modules/", "src/tests/", "dist/", "coverage/"],
		},
	},
});
