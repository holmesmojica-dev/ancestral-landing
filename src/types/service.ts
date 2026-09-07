export type ServiceId =
	| "environmental"
	| "forestry"
	| "agricultural"
	| "water-resources"
	| "occupational-safety";

export type ServiceSlug =
	| "ambientales"
	| "forestales"
	| "agricolas"
	| "recurso-hidrico"
	| "seguridad-salud-trabajo";

export interface ServiceIconSet {
	readonly default: string;
	readonly green: string;
	readonly navy: string;
	readonly white: string;
}

export interface ServiceCapability {
	readonly title: string;
	readonly description: string;
}

export interface ServiceContext {
	readonly title: string;
	readonly paragraphs: readonly string[];
}

export interface ServiceGalleryImage {
	readonly src: string;
	readonly alt: string;
	readonly caption: string;
	readonly width: number;
	readonly height: number;
}

export interface ServiceContactContent {
	readonly heading: string;
	readonly description: string;
}

export interface ServiceDetailContent {
	readonly heroCopy: string;
	readonly valueProposition: string;
	readonly capabilities: readonly ServiceCapability[];
	readonly context: ServiceContext;
	readonly gallery: readonly ServiceGalleryImage[];
	readonly contact: ServiceContactContent;
}

export interface ServiceDefinition {
	readonly id: ServiceId;
	readonly slug: ServiceSlug;
	readonly name: string;
	readonly description: string;
	readonly route: `/servicios/${ServiceSlug}`;
	readonly icons: ServiceIconSet;
	readonly image: string;
	readonly detail: ServiceDetailContent;
}
