import { Leaf, MapPin, Trees, UsersRound } from "lucide-react";

const indicators = [
	{ label: "Años de experiencia", value: "+10", Icon: Leaf },
	{ label: "Árboles sembrados", value: "+1M", Icon: Trees },
	{ label: "Privado y público", value: "Sector", Icon: UsersRound },
	{ label: "Colombiano", value: "Oriente", Icon: MapPin },
] as const;

export function ExperienceIndicators() {
	return (
		<section aria-label="Experiencia y alcance de Ancestral" className="experience-indicators">
			<div className="container">
				<div className="experience-indicators__container pt-9 pb-10 pt-sm-2 pb-sm-2 pt-lg-6 pb-lg-6">
					<ul className="row g-0 experience-indicators__list">
						{indicators.map(({ Icon, label, value }) => (
							<li className="col-12 col-sm-6 col-lg-3 experience-indicators__item" key={label}>
								<Icon aria-hidden="true" focusable="false" size={32} strokeWidth={2} />
								<span className="experience-indicators__content">
									<strong className="experience-indicators__value">{value}</strong>
									<span className="experience-indicators__label">{label}</span>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
