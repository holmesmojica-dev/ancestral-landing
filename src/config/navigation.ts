import type { NavigationItem } from "../types/navigation";

export const navigationItems = [
	{ id: "inicio", label: "Inicio", href: "#inicio" },
	{ id: "nosotros", label: "Nosotros", href: "#nosotros" },
	{ id: "servicios", label: "Servicios", href: "#servicios" },
	{ id: "contacto", label: "Contacto", href: "#contacto" },
] as const satisfies readonly NavigationItem[];
