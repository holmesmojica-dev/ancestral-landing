import { Route, Routes, useLocation } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SeoMetadata } from "./components/SeoMetadata/SeoMetadata";
import { routePaths } from "./config/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage/ServiceDetailPage";

export default function App() {
	const location = useLocation();
	const isHomePage = location.pathname === routePaths.home;
	const skipTargetId = isHomePage ? "main-content" : "service-detail-title";
	const focusSkipTarget = () => {
		document.getElementById(skipTargetId)?.focus({ preventScroll: true });
	};

	return (
		<>
			<SeoMetadata />
			<a className="skip-link" href={`#${skipTargetId}`} onClick={focusSkipTarget}>
				Saltar al contenido principal
			</a>
			<Header isHomePage={isHomePage} />
			<main id="main-content" tabIndex={-1}>
				<Routes>
					<Route element={<HomePage />} path={routePaths.home} />
					<Route element={<ServiceDetailPage />} path={routePaths.serviceDetail} />
				</Routes>
			</main>
			<Footer isHomePage={isHomePage} />
		</>
	);
}
