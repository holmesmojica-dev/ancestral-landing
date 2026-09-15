import type { NavigationItem, ServiceDetailNavigationSectionId } from "../types/navigation";

export const navigationItems = [
	{ id: "inicio", label: "Inicio", href: "#inicio" },
	{ id: "nosotros", label: "Nosotros", href: "#nosotros" },
	{ id: "servicios", label: "Servicios", href: "#servicios" },
	{ id: "contacto", label: "Contacto", href: "#contacto" },
] as const satisfies readonly NavigationItem[];

export const serviceDetailNavigationItems = [
	{ id: "servicio", label: "Servicio", href: "#servicio" },
	{ id: "capacidades", label: "Capacidades", href: "#capacidades" },
	{ id: "territorio", label: "Territorio", href: "#territorio" },
	{ id: "experiencia", label: "Experiencia", href: "#experiencia" },
	{ id: "contacto", label: "Contacto", href: "#contacto" },
] as const satisfies readonly NavigationItem<ServiceDetailNavigationSectionId>[];
