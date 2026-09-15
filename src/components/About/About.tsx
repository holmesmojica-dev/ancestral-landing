import { Leaf } from "lucide-react";

import aboutImage from "../../assets/images/institutional/institutional-field-work.webp";
import { Section } from "../Section/Section";

export function About() {
	return (
		<Section aria-labelledby="about-title" className="about" id="nosotros" tone="dark">
			<div className="about__layout">
				<div className="about__intro">
					<h2 className="about__title" id="about-title">
						¿Quiénes <span>somos?</span>
					</h2>
					<p>
						Somos una empresa con más de 10 años de experiencia en servicios ambientales, con amplia
						presencia y ejecución en el oriente colombiano.
					</p>
				</div>

				<div className="about__visual">
					<img
						alt="Equipo de Ancestral realizando trabajo ambiental en campo"
						className="about__image"
						decoding="async"
						height="1200"
						loading="lazy"
						src={aboutImage}
						width="1600"
					/>
				</div>

				<div className="about__details">
					<p>
						Contamos con viveros propios para la producción de material vegetal en diferentes zonas
						del departamento de Santander.
					</p>
					<p>
						Desde nuestra sede administrativa en Bucaramanga formulamos, asesoramos y ejecutamos
						proyectos para organizaciones del sector público y privado.
					</p>

					<p className="about__statement">
						<span className="about__statement-icon">
							<Leaf aria-hidden="true" focusable="false" size={20} strokeWidth={2} />
						</span>
						<strong>Comprometidos con el territorio y con el futuro.</strong>
					</p>
				</div>
			</div>
		</Section>
	);
}
