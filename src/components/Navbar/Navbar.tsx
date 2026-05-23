import { MenuIcon } from "lucide-react";
import NetworkButtons from "../Button/NetworkButtons";
import { useEffect, useState } from "react";
import {
	getBaseSectionHref,
	getMenuSectionId,
	menuItems,
	menuSectionClass,
} from "../../config/menuConfig";

const Navbar: React.FC = () => {
	const [activeItem, setActiveItem] = useState("");

	useEffect(() => {
		return initScrollingObserver();
	}, []);

	const initScrollingObserver = () => {
		const elements = document.getElementsByClassName(menuSectionClass);
		const sections = Array.from(elements);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const menuItem = menuItems.find((item) => getMenuSectionId(item.id) === entry.target.id);
						if (menuItem) setActiveItem(menuItem.id);
					}
				});
			},
			{
				root: null,
				threshold: 0.4,
			}
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	};

	const handleItemClick = () => {
		const toggle = document.getElementById("navbar-toggle") as HTMLInputElement | null;
		if (toggle) toggle.checked = false;
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid align-items-center position-relative">
				<input type="checkbox" id="navbar-toggle" className="d-none" aria-hidden="true" />
				<label htmlFor="navbar-toggle" className="navbar-toggler" aria-label="Toggle navigation">
					<MenuIcon className="c-fc-accent c-fw-bold" />
				</label>

				<div className="navbar-collapse" id="navbarNav">
					<ul className="navbar-nav p-3 p-lg-0">
						{menuItems.map((item) => (
							<li className="nav-item" key={`nav-item-${item.id}`}>
								<a
									className={`nav-link ${activeItem === item.id ? "active" : ""}`}
									id={item.id}
									href={getBaseSectionHref(item.id)}
									onClick={() => handleItemClick()}
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<NetworkButtons className="nav-network" />
			</div>
		</nav>
	);
};

export default Navbar;
