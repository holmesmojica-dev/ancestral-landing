import agriculturalIcon from "../assets/icons/services/agricultural/agricultural.png";
import agriculturalGreenIcon from "../assets/icons/services/agricultural/agricultural-green.png";
import agriculturalNavyIcon from "../assets/icons/services/agricultural/agricultural-navy.png";
import agriculturalWhiteIcon from "../assets/icons/services/agricultural/agricultural-white.png";
import environmentalIcon from "../assets/icons/services/environmental/environmental.png";
import environmentalGreenIcon from "../assets/icons/services/environmental/environmental-green.png";
import environmentalNavyIcon from "../assets/icons/services/environmental/environmental-navy.png";
import environmentalWhiteIcon from "../assets/icons/services/environmental/environmental-white.png";
import forestryIcon from "../assets/icons/services/forestry/forestry.png";
import forestryGreenIcon from "../assets/icons/services/forestry/forestry-green.png";
import forestryNavyIcon from "../assets/icons/services/forestry/forestry-navy.png";
import forestryWhiteIcon from "../assets/icons/services/forestry/forestry-white.png";
import occupationalSafetyIcon from "../assets/icons/services/occupational-safety/occupational-safety.png";
import occupationalSafetyGreenIcon from "../assets/icons/services/occupational-safety/occupational-safety-green.png";
import occupationalSafetyNavyIcon from "../assets/icons/services/occupational-safety/occupational-safety-navy.png";
import occupationalSafetyWhiteIcon from "../assets/icons/services/occupational-safety/occupational-safety-white.png";
import waterResourcesIcon from "../assets/icons/services/water-resources/water-resources.png";
import waterResourcesGreenIcon from "../assets/icons/services/water-resources/water-resources-green.png";
import waterResourcesNavyIcon from "../assets/icons/services/water-resources/water-resources-navy.png";
import waterResourcesWhiteIcon from "../assets/icons/services/water-resources/water-resources-white.png";
import agriculturalImage from "../assets/images/services/agricultural.webp";
import environmentalImage from "../assets/images/services/environmental.webp";
import forestryImage from "../assets/images/services/forestry.webp";
import occupationalSafetyImage from "../assets/images/services/occupational-safety.webp";
import waterResourcesImage from "../assets/images/services/water-resources.webp";
import type { ServiceDefinition } from "../types/service";

export const services = [
	{
		id: "environmental",
		slug: "ambientales",
		name: "Servicios Ambientales",
		route: "/servicios/ambientales",
		icons: {
			default: environmentalIcon,
			green: environmentalGreenIcon,
			navy: environmentalNavyIcon,
			white: environmentalWhiteIcon,
		},
		image: environmentalImage,
	},
	{
		id: "forestry",
		slug: "forestales",
		name: "Servicios Forestales",
		route: "/servicios/forestales",
		icons: {
			default: forestryIcon,
			green: forestryGreenIcon,
			navy: forestryNavyIcon,
			white: forestryWhiteIcon,
		},
		image: forestryImage,
	},
	{
		id: "agricultural",
		slug: "agricolas",
		name: "Servicios Agrícolas",
		route: "/servicios/agricolas",
		icons: {
			default: agriculturalIcon,
			green: agriculturalGreenIcon,
			navy: agriculturalNavyIcon,
			white: agriculturalWhiteIcon,
		},
		image: agriculturalImage,
	},
	{
		id: "water-resources",
		slug: "recurso-hidrico",
		name: "Manejo del Recurso Hídrico",
		route: "/servicios/recurso-hidrico",
		icons: {
			default: waterResourcesIcon,
			green: waterResourcesGreenIcon,
			navy: waterResourcesNavyIcon,
			white: waterResourcesWhiteIcon,
		},
		image: waterResourcesImage,
	},
	{
		id: "occupational-safety",
		slug: "seguridad-salud-trabajo",
		name: "Seguridad y Salud en el Trabajo",
		route: "/servicios/seguridad-salud-trabajo",
		icons: {
			default: occupationalSafetyIcon,
			green: occupationalSafetyGreenIcon,
			navy: occupationalSafetyNavyIcon,
			white: occupationalSafetyWhiteIcon,
		},
		image: occupationalSafetyImage,
	},
] as const satisfies readonly ServiceDefinition[];
