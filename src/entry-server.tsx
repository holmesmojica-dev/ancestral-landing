import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import { createBaseAwarePath, routePaths } from "./config/routes";
import { renderSeoHead } from "./seo/renderSeoHead";

export { createSitemap, indexableRoutes } from "./config/seo";

export const notFoundRoute = routePaths.notFound;

const seoHeadPlaceholder = "<!--seo-head-->";
const appHtmlPlaceholder = "<!--app-html-->";

export function renderDocument(
	template: string,
	pathname: string,
	baseUrl = import.meta.env.BASE_URL
) {
	if (!template.includes(seoHeadPlaceholder) || !template.includes(appHtmlPlaceholder)) {
		throw new Error("The client HTML template does not contain the prerender placeholders.");
	}

	const seoHead = renderSeoHead(pathname);

	const appHtml = renderToString(
		<StrictMode>
			<StaticRouter basename={baseUrl} location={createBaseAwarePath(pathname, baseUrl)}>
				<App />
			</StaticRouter>
		</StrictMode>
	);

	return template.replace(seoHeadPlaceholder, seoHead).replace(appHtmlPlaceholder, appHtml);
}
