import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigationItems, serviceDetailNavigationItems } from "../../config/navigation";
import { createBaseAwarePath, routePaths } from "../../config/routes";
import { genericWebsiteWhatsAppUrl } from "../../contact/whatsApp";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ActionLink } from "../ActionLink/ActionLink";
import { BrandLogo } from "../BrandLogo/BrandLogo";

import WhatsappIcon from "../../assets/icons/social/whatsapp.webp";

const navigationId = "primary-navigation";
const homeNavigationSectionIds = navigationItems.map((item) => item.id);
const serviceDetailNavigationSectionIds = serviceDetailNavigationItems.map((item) => item.id);
const serviceDetailStickyOffset = 120;

export interface HeaderProps {
	readonly isHomePage?: boolean;
	readonly isServiceDetailPage?: boolean;
}

export function Header({ isHomePage = true, isServiceDetailPage }: Readonly<HeaderProps>) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const showsServiceDetailNavigation = isServiceDetailPage ?? !isHomePage;
	const currentNavigationItems = showsServiceDetailNavigation
		? serviceDetailNavigationItems
		: navigationItems;
	const currentSectionIds = showsServiceDetailNavigation
		? serviceDetailNavigationSectionIds
		: homeNavigationSectionIds;
	const initialSectionId = showsServiceDetailNavigation ? "servicio" : "inicio";
	const [observedActiveSectionId, setActiveSectionId] = useActiveSection(
		currentSectionIds,
		initialSectionId,
		isHomePage ? undefined : serviceDetailStickyOffset
	);
	const activeSectionId = (currentSectionIds as readonly string[]).includes(observedActiveSectionId)
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
	const homeHref = isHomePage ? "#inicio" : createBaseAwarePath(`${routePaths.home}#inicio`);
	const getNavigationHref = (href: (typeof currentNavigationItems)[number]["href"]) =>
		isHomePage || showsServiceDetailNavigation
			? href
			: createBaseAwarePath(`${routePaths.home}${href}`);

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
									aria-current={
										(isHomePage || showsServiceDetailNavigation) && item.id === activeSectionId
											? "location"
											: undefined
									}
									className="site-header__navigation-link"
									href={getNavigationHref(item.href)}
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
						href={genericWebsiteWhatsAppUrl}
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
