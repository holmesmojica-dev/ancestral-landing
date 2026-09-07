import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/index.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("The application root element was not found.");
}

createRoot(rootElement).render(
	<StrictMode>
		<BrowserRouter
			basename={import.meta.env.BASE_URL}
			future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
		>
			<App />
		</BrowserRouter>
	</StrictMode>
);
