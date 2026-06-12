import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router basename="/ancestral-landing/">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
