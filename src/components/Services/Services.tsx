import { services } from "../../config/services";
import { Section } from "../Section/Section";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export function Services() {
	return (
		<Section aria-labelledby="services-title" className="services" id="servicios" tone="surface">
			<header className="services__header">
				<h2 className="services__title" id="services-title">
					Nuestros <span>servicios</span>
				</h2>
			</header>

			<ul className="row g-4 list-unstyled services__grid">
				{services.map((service) => (
					<li className="col-12 col-md-6 col-lg-4 col-xl" key={service.id}>
						<ServiceCard service={service} />
					</li>
				))}
			</ul>
		</Section>
	);
}
