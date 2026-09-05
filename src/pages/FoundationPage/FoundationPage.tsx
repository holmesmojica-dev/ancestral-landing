import { ActionLink } from "../../components/ActionLink/ActionLink";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Section } from "../../components/Section/Section";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";

export function FoundationPage() {
	return (
		<>
			<a className="skip-link" href="#main-content">
				Saltar al contenido principal
			</a>
			<main className="foundation-page" id="main-content" tabIndex={-1}>
				<Section aria-labelledby="foundation-title" className="foundation-page__intro">
					<BrandLogo className="foundation-page__logo" />
					<p className="foundation-page__eyebrow">Nueva experiencia digital</p>
					<h1 className="foundation-page__title" id="foundation-title">
						La nueva experiencia de Ancestral está en camino.
					</h1>
					<p className="foundation-page__description">
						Estamos preparando un espacio renovado para acercarte a nuestros servicios y a la
						experiencia que construimos en el territorio.
					</p>
					<ActionLink href="#foundation-details" size="large">
						Conocer la base V2
					</ActionLink>
				</Section>

				<Section
					aria-labelledby="foundation-details-title"
					className="foundation-page__details"
					id="foundation-details"
					tone="dark"
				>
					<SectionHeading
						description="Este punto de partida reúne la identidad visual, la estructura técnica y los criterios de accesibilidad que guiarán la siguiente etapa."
						eyebrow="Ancestral Landing V2"
						id="foundation-details-title"
						title="Una base coherente para seguir creciendo"
						tone="dark"
					/>
				</Section>
			</main>
		</>
	);
}
