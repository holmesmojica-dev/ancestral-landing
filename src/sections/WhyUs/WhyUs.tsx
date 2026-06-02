import { Handshake, HardHatIcon, SproutIcon } from "lucide-react";
import RoundedIcon from "../../components/RoundedIcon/RoundedIcon";
import { ICON_STYLES } from "../../components/RoundedIcon/RoundedIcon.constants";
import { BaseSectionProps } from "../../types/baseSection";
import { menuSectionClass } from "../../config/menuConfig";

const WhyUs: React.FC<BaseSectionProps> = ({ id }) => {
	const features = [
		{
			id: 1,
			icon: HardHatIcon,
			title: "Experiencia",
			text: "Conocemos las necesidades y desafíos del entorno, ofreciendo soluciones adaptadas a cada región",
		},
		{
			id: 2,
			icon: Handshake,
			title: "Compromiso Ambiental",
			text: "Priorizamos prácticas sostenibles que benefician tanto a nuestros clientes como las zonas ambientales y ecológicas",
		},
		{
			id: 3,
			icon: SproutIcon,
			title: "Proyectos Personalizados",
			text: "Asesoramos y ejecutamos proyectos únicos, tanto para el sector privado como público",
		},
	];

	return (
		<section className={`${menuSectionClass} overflow-hidden`} id={id}>
			<div className="row">
				<div className="col-lg-6 why-us-image"></div>
				<div className="col-lg-6 c-bg-primary p-7 p-sm-9">
					<h5 className="c-fc-accent c-ff-inter c-fs-h4 c-fw-medium c-lh-compact">
						Por qué Ancestral?
					</h5>
					<h2 className="c-ff-inter c-fs-title c-fw-semibold c-lh-compact c-fc-white py-4">
						Compromiso Sostenible y Soluciones Certificadas
					</h2>
					<ul className="c-features-list">
						<li>
							Contamos con registro oficial como productor y comercializador de plántulas de
							especies forestales otorgado por el ICA
						</li>
						<li>
							Contamos con registro único de comercializadores de minerales RUCOM otorgado por la
							Agencia Nacional de Minería
						</li>
					</ul>
					<div>
						<div className="row gx-4 gy-5 pt-7">
							{features.map((feature) => (
								<div
									className="col-sm-6 pt-3 d-flex flex-column gap-3"
									key={`why-us-feature-${feature.id}`}
								>
									<div className="pb-4">
										<RoundedIcon
											icon={feature.icon}
											style={feature.id % 2 === 0 ? ICON_STYLES.ACCENT : ICON_STYLES.SECONDARY}
										/>
									</div>
									<h3 className="c-ff-inter c-fc-white c-fs-md c-fw-medium c-lh-relaxed mb-0">
										{feature.title}
									</h3>
									<p className="c-fc-medium-gray">{feature.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
