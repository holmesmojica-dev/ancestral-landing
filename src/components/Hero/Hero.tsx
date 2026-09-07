import { Leaf, UsersRound } from "lucide-react";

import heroImage from "../../assets/images/hero/hero-primary.webp";
import { ActionLink } from "../ActionLink/ActionLink";

export function Hero() {
	return (
		<section aria-labelledby="hero-title" className="hero" id="inicio">
			<div className="hero__shape d-none d-lg-block" aria-hidden="true">
				<svg viewBox="0 0 140 345" preserveAspectRatio="none" aria-hidden="true">
					<path
						d="
						M 0 0
						L 80 0

						C 50 30, 42 65, 40 92
						C 35 145, 53 208, 75 250
						C 93 284, 106 308, 140 335

						L 150 360
						L 0 360
						Z
						"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div className="hero__layout">
				<div className="hero__visual">
					<div className="hero__image-frame">
						<img
							alt="Personas trabajando en un vivero de material vegetal"
							className="hero__image"
							decoding="async"
							loading="eager"
							src={heroImage}
						/>
					</div>
				</div>
				<div className="container">
					<div className="row g-7">
						<div className="col-12 col-lg-5 hero__content">
							<h1 className="hero__title text-balance" id="hero-title">
								Transformamos <span>entornos</span>, generamos vida.
							</h1>
							<p className="hero__description">
								Formulamos, asesoramos y ejecutamos proyectos ambientales en el sector privado y
								público, con acciones que protegen los recursos naturales y contribuyen a un futuro
								sostenible.
							</p>
							<div className="d-flex flex-column flex-sm-row gap-4 hero__actions">
								<ActionLink href="#servicios" size="large">
									<Leaf aria-hidden="true" size={20} strokeWidth={2} />
									<span>Nuestros servicios</span>
								</ActionLink>
								<ActionLink href="#nosotros" size="large" variant="secondary">
									<UsersRound aria-hidden="true" size={20} strokeWidth={2} />
									<span>Conócenos</span>
								</ActionLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
