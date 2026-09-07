import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigationItems, serviceDetailNavigationItems } from "../../config/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ActionLink } from "../ActionLink/ActionLink";
import { BrandLogo } from "../BrandLogo/BrandLogo";

import WhatsappIcon from "../../assets/icons/social/whatsapp.webp";

const navigationId = "primary-navigation";
const whatsAppUrl = "https://wa.me/573164114933";
const homeNavigationSectionIds = navigationItems.map((item) => item.id);
const serviceDetailNavigationSectionIds = serviceDetailNavigationItems.map((item) => item.id);
const serviceDetailStickyOffset = 120;

export interface HeaderProps {
	readonly isHomePage?: boolean;
}

export function Header({ isHomePage = true }: Readonly<HeaderProps>) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const currentNavigationItems = isHomePage ? navigationItems : serviceDetailNavigationItems;
	const currentSectionIds = isHomePage
		? homeNavigationSectionIds
		: serviceDetailNavigationSectionIds;
	const initialSectionId = isHomePage ? "inicio" : "servicio";
	const [observedActiveSectionId, setActiveSectionId] = useActiveSection(
		currentSectionIds,
		initialSectionId,
		isHomePage ? undefined : serviceDetailStickyOffset
	);
	const activeSectionId = currentSectionIds.some(
		(sectionId) => sectionId === observedActiveSectionId
	)
		? observedActiveSectionId
		: initialSectionId;
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isMenuOpen) {
			return undefined;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
				menuButtonRef.current?.focus();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isMenuOpen]);

	useEffect(() => {
		const handleResize = () => setIsMenuOpen(false);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const closeMenu = () => setIsMenuOpen(false);
	const handleNavigation = (sectionId: (typeof currentSectionIds)[number]) => {
		setActiveSectionId(sectionId);
		closeMenu();
	};
	const homeHref = isHomePage ? "#inicio" : `${import.meta.env.BASE_URL}#inicio`;

	return (
		<header className="site-header">
			<div className="container site-header__inner">
				<a
					aria-label="Ir al inicio de Ancestral"
					className="site-header__home"
					href={homeHref}
					onClick={() => handleNavigation("inicio")}
				>
					<BrandLogo className="site-header__logo" />
				</a>

				<button
					aria-controls={navigationId}
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
					className="site-header__menu-button"
					onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
					ref={menuButtonRef}
					type="button"
				>
					{isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
				</button>

				<nav
					aria-label="Navegación principal"
					className={`site-header__navigation${isMenuOpen ? " site-header__navigation--open" : ""}`}
					id={navigationId}
				>
					<ul className="site-header__navigation-list">
						{currentNavigationItems.map((item) => (
							<li key={item.id}>
								<a
									aria-current={item.id === activeSectionId ? "location" : undefined}
									className="site-header__navigation-link"
									href={item.href}
									onClick={() => handleNavigation(item.id)}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>

					<ActionLink
						aria-label="Hablemos por WhatsApp"
						className="site-header__whatsapp"
						href={whatsAppUrl}
						onClick={closeMenu}
						rel="noreferrer"
						target="_blank"
					>
						<img alt="Logo de WhatsApp" src={WhatsappIcon} width={20} height={20} />
						<span>Hablemos</span>
					</ActionLink>
				</nav>
			</div>
		</header>
	);
}
