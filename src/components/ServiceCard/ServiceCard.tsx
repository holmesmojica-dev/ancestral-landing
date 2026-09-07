import { Link } from "react-router-dom";

import type { ServiceDefinition } from "../../types/service";

export interface ServiceCardProps {
	readonly service: ServiceDefinition;
}

export function ServiceCard({ service }: Readonly<ServiceCardProps>) {
	const titleId = `service-${service.id}-title`;
	const descriptionId = `service-${service.id}-description`;

	return (
		<Link
			aria-describedby={descriptionId}
			aria-labelledby={titleId}
			className="service-card"
			to={service.route}
		>
			<span className="service-card__icon" aria-hidden="true">
				<img alt="" height="48" src={service.icons.green} width="48" />
			</span>
			<span className="service-card__title" id={titleId}>
				{service.name}
			</span>
			<span className="service-card__description" id={descriptionId}>
				{service.description}
			</span>
		</Link>
	);
}
