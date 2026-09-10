import { Clock3, MapPin, Phone } from "lucide-react";
import { contactDetails } from "../../config/contact";
import { navigationItems } from "../../config/navigation";
import { createBaseAwarePath, routePaths } from "../../config/routes";
import { BrandLogo } from "../BrandLogo/BrandLogo";

import facebookIcon from "../../assets/icons/social/facebook-circle.webp";
import instagramIcon from "../../assets/icons/social/instagram-circle.webp";
import whatsappIcon from "../../assets/icons/social/whatsapp-circle.webp";

export interface FooterProps {
	readonly isHomePage?: boolean;
}

export function Footer({ isHomePage = true }: Readonly<FooterProps>) {
	const getNavigationHref = (sectionHref: (typeof navigationItems)[number]["href"]) =>
		isHomePage ? sectionHref : createBaseAwarePath(`${routePaths.home}${sectionHref}`);

	return (
		<footer className="site-footer px-3">
			<div className="container site-footer__grid">
				<div className="site-footer__brand d-flex flex-column justify-content-start gap-6 gap-sm-3 gap-lg-2">
					<a aria-label="Ir al inicio de Ancestral" href={getNavigationHref("#inicio")}>
						<BrandLogo className="site-footer__logo" variant="inverse" />
					</a>
					<p>
						Formulamos, asesoramos y ejecutamos proyectos ambientales para un futuro sostenible.
					</p>
				</div>

				<div>
					<h2>Contacto</h2>
					<address className="site-footer__contact">
						<p className="d-flex align-items-center gap-2">
							<MapPin aria-hidden="true" focusable="false" size={24} strokeWidth={2} />
							<span>
								{contactDetails.addressLine}
								<br />
								{contactDetails.cityLine}
							</span>
						</p>
						<p className="d-flex align-items-center gap-2">
							<Phone aria-hidden="true" focusable="false" size={24} strokeWidth={2} />
							<a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
						</p>
					</address>
					<div className="pt-4 mt-6 d-flex justify-content-around border-top">
						<a
							aria-label="Escribir a Ancestral por WhatsApp"
							href={contactDetails.whatsAppUrl}
							rel="noreferrer"
							target="_blank"
						>
							<img alt="" aria-hidden="true" height="36" src={whatsappIcon} width="36" />
						</a>
						<a
							aria-label="Visitar perfil de Ancestral en Facebook"
							href={contactDetails.facebookUrl}
							rel="noreferrer"
							target="_blank"
						>
							<img alt="" aria-hidden="true" height="36" src={facebookIcon} width="36" />
						</a>
						<a
							aria-label="Visitar perfil de Ancestral en Instagram"
							href={contactDetails.instagramUrl}
							rel="noreferrer"
							target="_blank"
						>
							<img alt="" aria-hidden="true" height="36" src={instagramIcon} width="36" />
						</a>
					</div>
				</div>

				<nav aria-label="Enlaces rápidos del pie de página">
					<h2>Enlaces rápidos</h2>
					<ul>
						{navigationItems.map((item) => (
							<li key={item.id}>
								<a href={getNavigationHref(item.href)}>{item.label}</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="site-footer__hours">
					<h2>
						<Clock3 aria-hidden="true" focusable="false" size={20} strokeWidth={2} />
						Horarios de atención
					</h2>
					<p>
						Lunes a Viernes
						<br />
						8:00 a.m. - 5:00 p.m.
					</p>
					<p>
						Sábados
						<br />
						8:00 a.m. - 12:00 m.
					</p>
				</div>
			</div>

			<div className="container site-footer__legal">
				<p>© 2026 Ancestral Servicios Ambientales. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
}
