import { MapPin, PhoneCall } from "lucide-react";
import ContactWidget from "../ContactWidget/ContactWidget";
import Vr from "../Vr/Vr";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getBaseSectionHref, MenuItemId } from "../../config/menuConfig";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 171) setIsScrolled(true);
			else setIsScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="header-spacer" />
			<header className="c-bg-white shadow z-1">
				<div className={`container-fluid container-xl ${isScrolled ? "hide-content" : ""}`}>
					<div className="row align-items-center justify-content-center justify-content-sm-between pt-5 ">
						<img
							src={`${import.meta.env.BASE_URL}images/logo.png`}
							className="col-7 col-sm-3 col-lg-3 col-xl-2"
							alt="Logo Ancestral servicios ambientales"
						/>
						<div className="col-sm-8 d-none d-sm-flex gap-6 justify-content-end">
							<ContactWidget title="Ubicación" description="Calle 54 # 22-12" widgetIcon={MapPin} />
							<Vr />
							<ContactWidget title="Llámanos" description="316 411 4933" widgetIcon={PhoneCall} />
							<Vr className="d-none d-lg-flex" />
							<a
								className="btn-link-sm btn-c-accent align-self-center d-none d-lg-block c-animation-float"
								href={getBaseSectionHref(MenuItemId.Contact)}
							>
								Agenda una cita
							</a>
						</div>
					</div>
					<hr className="mb-2" />
				</div>
				<div className="container-fluid container-xl pb-2">
					<Navbar />
				</div>
			</header>
		</>
	);
};

export default Header;
