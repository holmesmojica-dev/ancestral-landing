import { SproutIcon } from "lucide-react";
import RoundedIcon from "../../components/RoundedIcon/RoundedIcon";
import { ICON_STYLES } from "../../components/RoundedIcon/RoundedIcon.constants";
import { BaseSectionProps } from "../../types/baseSection";
import { menuSectionClass } from "../../config/menuConfig";

const ContactUs: React.FC<BaseSectionProps> = ({ id }) => (
	<section id={id} className={menuSectionClass}>
		<div className="d-flex flex-column position-relative">
			<div className="text-center position-relative p-3 p-sm-9">
				<div className="position-absolute h-100 w-100 top-0 start-0"></div>
				<div className="position-relative d-flex flex-column align-items-center gap-3 pt-1 pb-9 mb-9">
					<h5 className="c-fc-secondary c-ff-inter c-fs-h4 ">Solicita un servicio</h5>
					<h2 className="c-ff-inter c-fw-semibold c-fs-title c-fc-primary">
						Listo para conectar con nosotros?
					</h2>
					<div className="-sm-7 pb-9 mb-9">
						Si deseas conocer mas sobre nuestros servicios puedes escribirnos y con gusto te
						contactaremos
					</div>
					<div className="p-8"></div>
				</div>
			</div>
			<div className="contact-us-form-container pb-9 mb-5">
				<div className="container">
					<div className="d-flex flex-column flex-sm-row w-100 rounded-4 overflow-hidden shadow border">
						<div className="col-sm-6 contact-us-image position-relative">
							<div className="h-100 w-100 bg-black bg-gradient opacity-50 position-absolute"></div>
							<div className="position-relative d-flex flex-column px-5 py-9 p-sm-8 justify-content-end align-items-center text-center gap-2 h-100">
								<RoundedIcon icon={SproutIcon} style={ICON_STYLES.ACCENT} />
								<h3 className="c-ff-inter c-fs-h2 c-fw-semibold c-fc-white">
									Envía tu necesidad, Obtén una solución
								</h3>
								<div className="c-fc-white">
									Estamos aquí para responder tus preguntas y ayudarte a dar el siguiente paso
								</div>
							</div>
						</div>
						<div className="col-sm-6 p-7 p-lg-9 c-bg-white">
							<form>
								<div className="row g-7">
									<div className="col-sm-6">
										<label htmlFor="service-name" className="visually-hidden">
											Nombre
										</label>
										<input type="text" placeholder="Nombre" name="service-name" id="service-name" />
									</div>
									<div className="col-sm-6">
										<label htmlFor="service-email" className="visually-hidden">
											Email
										</label>
										<input
											type="email"
											placeholder="Email"
											name="service-email"
											id="service-email"
										/>
									</div>
									<div className="col-sm-6">
										<label htmlFor="service-phone" className="visually-hidden">
											Teléfono
										</label>
										<input
											type="tel"
											placeholder="Teléfono"
											name="service-phone"
											id="service-phone"
										/>
									</div>
									<div className="col-sm-6">
										<label htmlFor="service-date" className="visually-hidden">
											Fecha
										</label>
										<input type="date" placeholder="Fecha" name="service-date" id="service-date" />
									</div>
									<div className="col-12">
										<label htmlFor="select-service" className="visually-hidden">
											Seleccionar servicio
										</label>
										<select
											className="w-100"
											name="select-service"
											id="select-service"
											title="Seleccionar servicio"
										>
											<option value={0}>Seleccionar servicio</option>
										</select>
									</div>
									<div className="col-12">
										<label htmlFor="service-details" className="visually-hidden">
											Detalles adicionales
										</label>
										<textarea
											rows={6}
											placeholder="Detalles adicionales"
											name="service-details"
											id="service-details"
										></textarea>
									</div>
									<div>
										<button type="submit" className="btn-link btn-c-accent">
											Enviar
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default ContactUs;
