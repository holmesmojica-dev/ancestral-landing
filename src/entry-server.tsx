import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import { renderSeoHead } from "./seo/renderSeoHead";

export { createSitemap, indexableRoutes } from "./config/seo";

const seoHeadPlaceholder = "<!--seo-head-->";
const appHtmlPlaceholder = "<!--app-html-->";

export function renderDocument(template: string, pathname: string) {
	if (!template.includes(seoHeadPlaceholder) || !template.includes(appHtmlPlaceholder)) {
		throw new Error("The client HTML template does not contain the prerender placeholders.");
	}

	const seoHead = renderSeoHead(pathname);

	const appHtml = renderToString(
		<StrictMode>
			<StaticRouter location={pathname}>
				<App />
			</StaticRouter>
		</StrictMode>
	);

	return template.replace(seoHeadPlaceholder, seoHead).replace(appHtmlPlaceholder, appHtml);
}
