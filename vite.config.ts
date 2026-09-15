import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",

	plugins: [react()],

	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/tests/setup.ts",

		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			reportsDirectory: "./coverage",
			exclude: [
				"node_modules/**",
				"dist/**",
				"coverage/**",
				"src/tests/**",
				"**/*.test.{ts,tsx}",
				"src/**/*.d.ts",
				"src/types/**",
				"src/main.tsx",
				"*.config.{js,ts}",
			],
		},
	},
});
