import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import type { ServiceGalleryImage } from "../../types/service";

export interface ServiceGalleryProps {
	readonly images: readonly ServiceGalleryImage[];
}

export function ServiceGallery({ images }: Readonly<ServiceGalleryProps>) {
	const [selectedImageSrc, setSelectedImageSrc] = useState(images[0]?.src ?? "");
	const selectedImageIndex = images.findIndex((image) => image.src === selectedImageSrc);
	const activeImageIndex = selectedImageIndex >= 0 ? selectedImageIndex : 0;
	const hasMultipleImages = images.length > 1;
	const activeImage = images[activeImageIndex];

	const showPreviousImage = () => {
		const previousIndex = (activeImageIndex - 1 + images.length) % images.length;
		setSelectedImageSrc(images[previousIndex].src);
	};

	const showNextImage = () => {
		const nextIndex = (activeImageIndex + 1) % images.length;
		setSelectedImageSrc(images[nextIndex].src);
	};

	return (
		<section aria-labelledby="service-gallery-title" className="service-gallery" id="experiencia">
			<div className="container">
				<header className="service-gallery__header">
					<p>Experiencia en campo</p>
					<h2 id="service-gallery-title">Nuestro trabajo en imágenes</h2>
				</header>

				<div className="service-gallery__carousel">
					<ul className="service-gallery__slides">
						{images.map((image, index) => {
							const isActive = index === activeImageIndex;

							return (
								<li
									aria-label={`Imagen ${index + 1} de ${images.length}`}
									aria-roledescription="diapositiva"
									className="service-gallery__slide"
									hidden={!isActive}
									key={image.src}
								>
									<figure className="service-gallery__item">
										<img
											alt={image.alt}
											decoding="async"
											height={image.height}
											loading="lazy"
											src={image.src}
											width={image.width}
										/>
										<figcaption>{image.caption}</figcaption>
									</figure>
								</li>
							);
						})}
					</ul>

					{hasMultipleImages ? (
						<div className="service-gallery__controls">
							<button
								aria-label="Mostrar imagen anterior"
								onClick={showPreviousImage}
								type="button"
							>
								<ChevronLeft aria-hidden="true" focusable="false" />
							</button>

							<div aria-label="Seleccionar imagen" className="service-gallery__indicators">
								{images.map((image, index) => (
									<button
										aria-current={index === activeImageIndex ? "true" : undefined}
										aria-label={`Mostrar imagen ${index + 1} de ${images.length}: ${image.caption}`}
										key={image.src}
										onClick={() => setSelectedImageSrc(image.src)}
										type="button"
									/>
								))}
							</div>

							<button aria-label="Mostrar imagen siguiente" onClick={showNextImage} type="button">
								<ChevronRight aria-hidden="true" focusable="false" />
							</button>
						</div>
					) : null}

					{activeImage ? (
						<p aria-live="polite" className="visually-hidden">
							Imagen {activeImageIndex + 1} de {images.length}: {activeImage.caption}
						</p>
					) : null}
				</div>
			</div>
		</section>
	);
}
