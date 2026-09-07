import { ArrowLeft, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { Contact } from "../../components/Contact/Contact";
import { ServiceGallery } from "../../components/ServiceGallery/ServiceGallery";
import { getServiceBySlug } from "../../config/services";

const servicesDestination = { pathname: "/", hash: "#servicios" } as const;

export function ServiceDetailPage() {
	const { serviceSlug } = useParams();
	const service = getServiceBySlug(serviceSlug);

	if (!service) {
		return <Navigate replace to={servicesDestination} />;
	}

	return (
		<article className="service-detail">
			<div className="service-detail__breadcrumb-wrap">
				<div className="container">
					<nav aria-label="Ruta del servicio" className="service-detail__breadcrumb">
						<ol>
							<li>
								<Link to={servicesDestination}>
									<ArrowLeft aria-hidden="true" focusable="false" size={18} />
									<span>Todos los servicios</span>
								</Link>
							</li>
							<li aria-current="page" title={service.name}>
								{service.name}
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<section
				aria-labelledby="service-detail-title"
				className="service-detail__hero"
				id="servicio"
			>
				<div className="container service-detail__hero-layout">
					<div className="service-detail__hero-content">
						<p className="service-detail__eyebrow">Servicio</p>
						<h1 id="service-detail-title">{service.name}</h1>
						<p>{service.detail.heroCopy}</p>
					</div>

					<div className="service-detail__hero-visual">
						<img
							alt={`Trabajo en campo relacionado con ${service.name}`}
							decoding="async"
							height="1050"
							loading="eager"
							src={service.image}
							width="1400"
						/>
						<span aria-hidden="true" className="service-detail__hero-icon">
							<img alt="" height="56" src={service.icons.white} width="56" />
						</span>
					</div>
				</div>
			</section>

			<section aria-labelledby="service-value-title" className="service-detail__value">
				<div className="container service-detail__value-layout">
					<p className="service-detail__eyebrow">Cómo podemos acompañarte</p>
					<h2 id="service-value-title">Soluciones conectadas con las necesidades de tu proyecto</h2>
					<p>{service.detail.valueProposition}</p>
				</div>
			</section>

			<section
				aria-labelledby="service-capabilities-title"
				className="service-detail__capabilities"
				id="capacidades"
			>
				<div className="container">
					<header className="service-detail__section-header">
						<p className="service-detail__eyebrow">Alcance</p>
						<h2 id="service-capabilities-title">Capacidades del servicio</h2>
					</header>

					<ul className="service-detail__capability-grid">
						{service.detail.capabilities.map((capability) => (
							<li key={capability.title}>
								<span aria-hidden="true" className="service-detail__capability-icon">
									<Check focusable="false" size={18} strokeWidth={3} />
								</span>
								<div>
									<h3>{capability.title}</h3>
									<p>{capability.description}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section
				aria-labelledby="service-context-title"
				className="service-detail__context"
				id="territorio"
			>
				<div className="container service-detail__context-layout">
					<img alt="" aria-hidden="true" height="64" src={service.icons.green} width="64" />
					<div>
						<p className="service-detail__eyebrow">Territorio y sostenibilidad</p>
						<h2 id="service-context-title">{service.detail.context.title}</h2>
						{service.detail.context.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>
			</section>

			<ServiceGallery images={service.detail.gallery} />
			<Contact selectedService={service} />
		</article>
	);
}
