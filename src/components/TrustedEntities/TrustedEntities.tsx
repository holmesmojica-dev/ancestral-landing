import { trustedEntities } from "../../config/trusted-entities";
import { Section } from "../Section/Section";

export function TrustedEntities() {
	return (
		<Section aria-labelledby="trusted-entities-title" className="trusted-entities" tone="surface">
			<h2 className="trusted-entities__title" id="trusted-entities-title">
				Entidades que han <span>confiado en nosotros</span>
			</h2>

			<ul className="trusted-entities__list">
				{trustedEntities.map((entity) => (
					<li key={entity.name}>
						<img alt={entity.name} decoding="async" loading="lazy" src={entity.logo} />
					</li>
				))}
			</ul>
		</Section>
	);
}
