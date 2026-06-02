import { ArrowRight } from "lucide-react";
import { BaseSectionProps } from "../../types/baseSection";
import { menuSectionClass } from "../../config/menuConfig";
import { servicesData } from "../../config/servicesConfig";

const OurServices: React.FC<BaseSectionProps> = ({ id }) => {
	return (
		<section className={`${menuSectionClass} py-5`} id={id}>
			<div className="container p-6 p-lg-9">
				<div className="d-flex flex-column align-items-center text-center gap-3">
					<h5 className="c-fc-secondary c-ff-inter c-fs-h4 c-fw-medium c-lh-compact">
						Nuestros servicios
					</h5>
					<h2 className="our-services-title c-fc-primary c-ff-inter c-fw-semibold">
						Soluciones ambientales adaptadas a tus necesidades
					</h2>
					<div className="col-md-10 col-lg-6 our-services-description">
						Ofrecemos servicios ambientales, agrícolas, forestales y SST con experiencia, compromiso
						y enfoque sostenible.
					</div>
				</div>
				<div className="row g-7 pt-7">
					{servicesData.map((service) => (
						<div className="col-sm-6" key={`our-services-${service.id}`}>
							<div
								className="our-services-image position-relative rounded-3 overflow-hidden"
								style={{ backgroundImage: `url(${service.image})` }}
							>
								<div className="h-100 w-100 c-bg-primary top-0 opacity-25"></div>
								<div className="position-absolute bottom-0 w-100 p-5">
									<div className="d-flex justify-content-between c-bg-white rounded-3 p-5 align-items-center">
										<div>
											<h2 className="c-fs-md c-fc-primary c-fw-medium c-ff-inter c-lh-relaxed mb-0">
												{service.title}
											</h2>
										</div>
										<button
											type="button"
											title="Read More"
											className="btn-link-square btn-c-accent c-animation-go-right"
										>
											<ArrowRight />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
