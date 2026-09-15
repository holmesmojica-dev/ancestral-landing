import { ActionLink } from "../../components/ActionLink/ActionLink";
import { createBaseAwarePath, routePaths } from "../../config/routes";

export function NotFoundPage() {
	return (
		<section
			aria-labelledby="not-found-title"
			className="content-section content-section--dark not-found"
		>
			<div className="container not-found__content">
				<p className="not-found__eyebrow">ERROR 404</p>
				<h1 className="not-found__title" id="not-found-title">
					Página no encontrada
				</h1>
				<p className="not-found__copy">
					La página que buscas no existe, fue movida o ya no está disponible.
				</p>
				<div className="not-found__actions">
					<ActionLink href={createBaseAwarePath(routePaths.home)} size="large">
						Volver al inicio
					</ActionLink>
					<ActionLink
						href={createBaseAwarePath(`${routePaths.home}#servicios`)}
						size="large"
						variant="secondary"
					>
						Ver nuestros servicios
					</ActionLink>
				</div>
			</div>
		</section>
	);
}
