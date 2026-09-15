export type NavigationSectionId = "inicio" | "nosotros" | "servicios" | "contacto";
export type ServiceDetailNavigationSectionId =
	| "servicio"
	| "capacidades"
	| "territorio"
	| "experiencia"
	| "contacto";

export interface NavigationItem<TSectionId extends string = NavigationSectionId> {
	readonly id: TSectionId;
	readonly label: string;
	readonly href: `#${TSectionId}`;
}
