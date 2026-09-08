import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = resolve("dist");
const serverOutputDirectory = resolve("dist-ssr");
const templatePath = resolve(outputDirectory, "index.html");
const serverEntryPath = resolve(serverOutputDirectory, "entry-server.js");

try {
	const template = await readFile(templatePath, "utf8");
	const serverEntry = await import(pathToFileURL(serverEntryPath).href);

	for (const route of serverEntry.indexableRoutes) {
		const outputPath =
			route === "/" ? templatePath : resolve(outputDirectory, route.slice(1), "index.html");
		const html = serverEntry.renderDocument(template, route);

		await mkdir(dirname(outputPath), { recursive: true });
		await writeFile(outputPath, html, "utf8");
	}

	await writeFile(resolve(outputDirectory, "sitemap.xml"), serverEntry.createSitemap(), "utf8");
} finally {
	await rm(serverOutputDirectory, { force: true, recursive: true });
}
