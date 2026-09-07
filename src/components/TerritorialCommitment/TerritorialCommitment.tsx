import { Trees } from "lucide-react";

import restorationImage from "../../assets/images/impact/restoration.webp";
import { Section } from "../Section/Section";

export function TerritorialCommitment() {
	return (
		<Section
			aria-labelledby="territorial-commitment-title"
			className="territorial-commitment"
			tone="page"
		>
			<div className="territorial-commitment__panel">
				<div className="territorial-commitment__visual">
					<img
						alt="Paisaje con vegetación y un cuerpo de agua"
						decoding="async"
						loading="lazy"
						src={restorationImage}
					/>
				</div>

				<div className="territorial-commitment__content">
					<h2 id="territorial-commitment-title">
						Comprometidos con nuestro <span>territorio</span>
					</h2>
					<p>Nuestra experiencia se construye en el territorio.</p>
					<p>
						Hemos participado en proyectos de gestión, conservación, restauración y compensación
						ambiental, llevando el conocimiento técnico al campo y convirtiéndolo en acciones que
						contribuyen a proteger los recursos naturales y generar entornos más sostenibles.
					</p>
					<p>
						Nuestra participación en procesos de siembra en el Páramo de Santurbán refleja ese
						compromiso con la conservación y protección de ecosistemas estratégicos para Colombia.
					</p>

					<div className="territorial-commitment__impact">
						<Trees aria-hidden="true" focusable="false" size={32} strokeWidth={1.8} />
						<p>
							<strong>+1M</strong>
							<span>Árboles sembrados</span>
						</p>
					</div>

					<p className="territorial-commitment__statement">
						Más que proyectos, acciones que dejan huella.
					</p>
				</div>
			</div>
		</Section>
	);
}
