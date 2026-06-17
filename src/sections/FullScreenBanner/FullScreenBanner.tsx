import React, { useEffect, useState } from "react";
import { BaseSectionProps } from "../../types/baseSection";
import { menuSectionClass } from "../../config/menuConfig";
import ServiceThumbnailButton from "../../components/Button/ServiceThumbnailButton";
import CustomPopup from "../../components/Popup/CustomPopup";
import { ServiceData, servicesData } from "../../config/servicesConfig";

import bannerImage1 from "../../assets/images/banner/banner-img-1.jpg";
import bannerImage2 from "../../assets/images/banner/banner-img-2.jpg";
import bannerImage3 from "../../assets/images/banner/banner-img-3.jpg";
import bannerImage4 from "../../assets/images/banner/banner-img-4.jpg";

const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

const FullScreenBanner: React.FC<BaseSectionProps> = ({ id }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const preloadImages = images.slice(1);

		preloadImages.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	}, []);

	const openServicePopup = (service: ServiceData) => {
		setSelectedService(service);
		setIsPopupOpen(true);
	};

	const closeServicePopup = () => {
		setSelectedService(null);
		setIsPopupOpen(false);
	};

	return (
		<>
			<section className={`${menuSectionClass} banner position-relative overflow-hidden`} id={id}>
				<div className="banner-images">
					{images.map((image, index) => (
						<img
							key={image}
							src={image}
							alt=""
							decoding="async"
							className={`banner-image ${currentIndex === index ? "active" : ""}`}
						/>
					))}
				</div>

				<div className="h-100 w-100 c-bg-primary position-absolute opacity-60"></div>

				<div className="h-100 w-100 position-absolute">
					<div className="p-5 p-lg-0 container-lg h-100 d-flex flex-column gap-7 justify-content-center">
						<div className="px-6 py-8 c-bg-white rounded-3 col-sm-7 col-lg-6">
							<h1 className="banner-title c-fc-primary c-ff-inter c-fw-semibold">
								Ancestral <span className="c-fc-secondary">Servicios</span> Ambientales
							</h1>

							<p className="py-1 py-sm-3">
								Con más de 10 años de experiencia, somos líderes en servicios ambientales agrícolas
								y forestales en el oriente colombiano. Desde nuestros viveros acreditados, te
								ofrecemos soluciones personalizadas para tus proyectos sostenibles. ¡Explora
								nuestros servicios y únete al cambio hacia un futuro más verde!
							</p>

							<div className="banner-section-services-grid">
								{servicesData.map((service) => (
									<ServiceThumbnailButton
										key={`service-thumbnail-btn-${service.id}`}
										btnIcon={service.icon}
										title={service.title}
										onClick={() => openServicePopup(service)}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{selectedService && (
				<CustomPopup isOpen={isPopupOpen} title={selectedService.title} onClose={closeServicePopup}>
					<div className="row gap-4 gap-sm-0">
						<div className="col-12 col-sm-6 px-3">
							<div
								className="service-feature-image h-100"
								style={{ backgroundImage: `url(${selectedService.image})` }}
							></div>
						</div>

						<div className="col-12 col-sm-6 d-flex align-items-center">
							<ul className="c-features-list mb-0">
								{selectedService.features.map((feature) => (
									<li key={feature}>{feature}</li>
								))}
							</ul>
						</div>
					</div>
				</CustomPopup>
			)}
		</>
	);
};

export default FullScreenBanner;
