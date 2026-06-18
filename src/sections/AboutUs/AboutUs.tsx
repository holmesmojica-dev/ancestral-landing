import { PlusIcon } from "lucide-react";
import { BaseSectionProps } from "../../types/baseSection";
import { menuSectionClass } from "../../config/menuConfig";

import aboutServicesImg from "../../assets/images/about/about-services-img.webp";
import aboutCompleteServicesImg1 from "../../assets/images/about/about-complete-services-img-1.webp";
import aboutCompleteServicesImg2 from "../../assets/images/about/about-complete-services-img-2.webp";

const AboutUs: React.FC<BaseSectionProps> = ({ id }) => (
	<section className={`${menuSectionClass} container px-5 px-md-1 py-9`} id={id}>
		<div className="row gx-sm-9 gy-7 pt-4 pb-6">
			<div className="col-lg-6">
				<p className="c-fs-base c-lh-compact c-ff-inter c-fc-secondary c-fw-medium">
					Acerca de Ancestral
				</p>
				<p className="c-lh-compact c-fs-h3 c-ff-inter c-fc-primary c-fw-semibold py-lg-2 py-xl-4">
					Proveemos servicios ambientales con experiencia
				</p>
				<p className="c-fs-sm c-lh-loose">
					Ancestral es una empresa, con más de 10 años de experiencia en servicios ambientales con
					amplia presencia y ejecución en el oriente colombiano. Cuenta con viveros propios de
					producción de material vegetal en las diferentes zonas del departamento de Santander.
					Nuestra sede administrativa se encuentra en la ciudad de Bucaramanga. Formulamos,
					asesoramos y ejecutamos proyectos en temas ambientales en el sector privado y público.
				</p>

				<div className="d-flex flex-column flex-sm-row align-items-center gap-7 pt-5 pt-lg-6 pt-xl-8">
					<div className="col-12 col-md-6">
						<img
							className="rounded-3 w-100 h-auto"
							src={aboutServicesImg}
							alt="Proyectos ambientales"
							width={512}
							height={612}
						/>
					</div>

					<div className="col-lg-6">
						<ul className="c-features-list">
							<li>Proyectos ambientales</li>
							<li>Inventarios forestales</li>
							<li>Obras agrícolas</li>
							<li>Seguridad y salud</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="col-lg-6 position-relative">
				<img
					className="w-100 rounded-3"
					src={aboutCompleteServicesImg1}
					alt="Proyectos ambientales completados"
					width={645}
					height={735}
				/>
				<div className="c-bg-white w-50 h-50 position-absolute rounded-top-4 bottom-0 end-0 p-3 p-sm-4">
					<img
						className="w-100 h-auto"
						src={aboutCompleteServicesImg2}
						alt="Proyectos ambientales completados"
						width={384}
						height={479}
					/>
				</div>
				<div className="position-absolute top-100 translate-middle projects-widget">
					<div className="p-6 c-bg-white rounded-top-4">
						<div className="d-flex gap-2 justify-content-center">
							<span className="c-fc-primary c-ff-inter c-fw-semibold c-lh-compact c-fs-h2">
								1000
							</span>
							<PlusIcon className="c-fc-accent c-fw-bold" />
						</div>
						<span className="text-nowrap">Proyectos completados</span>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default AboutUs;
