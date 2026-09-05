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

export interface ServiceDefinition {
	readonly id: ServiceId;
	readonly slug: ServiceSlug;
	readonly name: string;
	readonly route: `/servicios/${ServiceSlug}`;
	readonly icons: ServiceIconSet;
	readonly image: string;
}
