import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { applySeoMetadata } from "../../seo/applySeoMetadata";

export function SeoMetadata() {
	const { pathname } = useLocation();

	useEffect(() => {
		applySeoMetadata(pathname);
	}, [pathname]);

	return null;
}
