import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import NetworkButtons from "../Button/NetworkButtons";

const Footer = () => (
	<footer className="position-relative">
		<div className="position-absolute w-100 h-100 c-bg-primary bg-gradient opacity-90"></div>
		<div className="container position-relative p-5 pt-sm-9 px-sm-9 pb-sm-3">
			<div className="row g-6 g-md-4">
				<div className="col-sm-4 d-flex flex-column gap-4">
					<img src="/images/logo-footer.png" className="w-75" alt="Logo Ancestral servicios ambientales" />
					<div className="c-fc-light-gray">
						Comprometidos en brindar soluciones ambientales con experiencia y certificación
					</div>
				</div>
				<div className="d-none d-lg-block col-1"></div>
				<div className="col-sm-4 d-flex flex-column gap-2 justify-content-center">
					<h4 className="c-ff-inter c-fc-white c-fs-md">Información de contacto</h4>
					<div className="d-flex gap-5">
						<MapPinIcon className="c-fc-accent" />
						<span className="c-fc-white">Calle 54 # 22-12</span>
					</div>
					<div className="d-flex gap-5">
						<MailIcon className="c-fc-accent" />
						<span className="c-fc-white">info@ancestral.com</span>
					</div>
					<div className="d-flex gap-5">
						<PhoneIcon className="c-fc-accent" />
						<span className="c-fc-white">316 411 4933</span>
					</div>
				</div>
				<div className="col-sm-4 col-lg-3 d-flex justify-content-end align-items-end">
					<NetworkButtons />
				</div>
			</div>
			<hr className="w-100" />
			<div className="d-flex justify-content-end">
				<span className="c-fc-white c-fs-sm">
					Copyright © {new Date().getFullYear()} Todos los derechos reservados.
				</span>
			</div>
		</div>
	</footer>
);

export default Footer;
