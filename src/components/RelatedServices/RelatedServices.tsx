import { services } from "../../config/services";
import type { ServiceId } from "../../types/service";
import { Section } from "../Section/Section";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export interface RelatedServicesProps {
	readonly currentServiceId: ServiceId;
}

export function RelatedServices({ currentServiceId }: Readonly<RelatedServicesProps>) {
	const relatedServices = services.filter((service) => service.id !== currentServiceId);

	return (
		<Section aria-labelledby="related-services-title" className="related-services" tone="surface">
			<header className="related-services__header">
				<p className="related-services__eyebrow">Más soluciones</p>
				<h2 className="related-services__title" id="related-services-title">
					Otros servicios
				</h2>
				<p className="related-services__description">
					Conoce las demás áreas en las que podemos acompañar tu proyecto.
				</p>
			</header>

			<ul className="row g-4 list-unstyled related-services__grid">
				{relatedServices.map((service) => (
					<li className="col-12 col-md-6 col-xl-3" key={service.id}>
						<ServiceCard service={service} />
					</li>
				))}
			</ul>
		</Section>
	);
}
