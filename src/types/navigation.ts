export type NavigationSectionId = "inicio" | "nosotros" | "servicios" | "contacto";

export interface NavigationItem {
	readonly id: NavigationSectionId;
	readonly label: string;
	readonly href: `#${NavigationSectionId}`;
}
