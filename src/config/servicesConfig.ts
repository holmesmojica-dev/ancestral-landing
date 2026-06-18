import { EarthIcon, HardHatIcon, LucideProps, TractorIcon, TreesIcon } from "lucide-react";

import agriculturalServicesImage from "../assets/images/services/agricultural-services.webp";
import forestryServicesImage from "../assets/images/services/forestry-services.webp";
import environmentalServicesImage from "../assets/images/services/environmental-services.webp";
import sstServicesImage from "../assets/images/services/sst-services.webp";

export enum ServiceId {
	Environmental = "Environmental",
	Forestry = "Forestry",
	Agricultural = "Agricultural",
	SST = "SST",
}

export interface ServiceData {
	id: ServiceId;
	title: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	image: string;
	features: string[];
}

export const servicesData: ServiceData[] = [
	{
		id: ServiceId.Environmental,
		title: "Ambientales",
		icon: EarthIcon,
		features: [
			"Formulación de proyectos ambientales",
			"Plan de manejo ambiental",
			"Restauración, limpieza, mantenimiento y Conservación de fuentes hídricas",
			"Suministro de personal especializado en manejo de cultivos",
			"Gestión de licencia ambiental sector minero y competencia de las CAR",
			"Concesión de aguas, permiso de vertimientos, ocupación de cause, transporte de hidrocarburos, y demás permisos reglamentados por el Decreto 1076 de 2015 Sector Ambiente y Desarrollo Sostenible",
			"Suministro de material vegetal",
			"Asesoría y ejecución de proyectos silvopastoril",
			"Asesoría técnica y representación jurídica en procesos sancionatorios ambientales",
			"Toma de muestras de suelos",
			"Organización de eventos ambientales",
			"Compensaciones ambientales",
		],
		image: environmentalServicesImage,
	},
	{
		id: ServiceId.Forestry,
		title: "Forestales",
		icon: TreesIcon,
		features: [
			"Inventarios forestales",
			"Ahuyentamiento de fauna",
			"Traslado de brinzales",
			"Reforestaciones",
			"Traslado de epifitas",
			"Mantenimientos de plantaciones.",
			"Levantamiento de veda",
			"Aprovechamientos forestales",
		],
		image: forestryServicesImage,
	},
	{
		id: ServiceId.Agricultural,
		title: "Agrícola",
		icon: TractorIcon,
		features: [
			"Asesoría en obras agrícolas, manejo de aguas y preparación de tierras",
			"Diseño y construcción de infraestructura agrícola",
			"Caracterización de suelos",
			"Masificación y fotografía aérea",
			"Suministro de insumos agrícolas",
			"Encerramientos perimetrales",
		],
		image: agriculturalServicesImage,
	},
	{
		id: ServiceId.SST,
		title: "SST",
		icon: HardHatIcon,
		features: [
			"Asesoría en obras agrícolas, manejo de aguas y preparación de tierras",
			"Diseño y construcción de infraestructura agrícola",
			"Caracterización de suelos",
			"Masificación y fotografía aérea",
			"Suministro de insumos agrícolas",
			"Encerramientos perimetrales",
		],
		image: sstServicesImage,
	},
];
