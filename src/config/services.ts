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
import environmentalImpactImage from "../assets/images/impact/environmental-impact.webp";
import restorationImage from "../assets/images/impact/restoration.webp";
import institutionalFieldWorkImage from "../assets/images/institutional/institutional-field-work.webp";
import institutionalTeamImage from "../assets/images/institutional/institutional-team.webp";
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
		description: "Formulación, asesoría y ejecución de proyectos ambientales integrales.",
		route: "/servicios/ambientales",
		seo: {
			title: "Servicios Ambientales en Colombia | Ancestral",
			description:
				"Formulamos, planificamos, ejecutamos y acompañamos proyectos ambientales para organizaciones públicas y privadas, con experiencia técnica y trabajo en territorio.",
		},
		icons: {
			default: environmentalIcon,
			green: environmentalGreenIcon,
			navy: environmentalNavyIcon,
			white: environmentalWhiteIcon,
		},
		image: environmentalImage,
		detail: {
			heroCopy:
				"Convertimos las necesidades ambientales de cada proyecto en soluciones técnicas, viables y responsables.",
			valueProposition:
				"Acompañamos a organizaciones públicas y privadas desde la formulación y planificación hasta la ejecución y seguimiento de sus proyectos ambientales, integrando conocimiento técnico, experiencia en campo y comprensión del territorio.",
			capabilities: [
				{
					title: "Planeación y gestión ambiental",
					description:
						"Formulamos proyectos y planes de manejo ambiental orientados al cumplimiento de los requerimientos técnicos y normativos de cada iniciativa.",
				},
				{
					title: "Restauración y conservación",
					description:
						"Desarrollamos acciones de restauración, limpieza, mantenimiento y conservación de fuentes hídricas y ecosistemas, buscando recuperar y proteger áreas de importancia ambiental.",
				},
				{
					title: "Gestión de permisos y licencias",
					description:
						"Acompañamos procesos relacionados con licencias ambientales y permisos ante las autoridades competentes, incluyendo concesiones de aguas, permisos de vertimientos, ocupación de cauce y otros trámites contemplados por la normativa ambiental aplicable.",
				},
				{
					title: "Material vegetal y proyectos sostenibles",
					description:
						"Contamos con capacidad para el suministro de material vegetal y acompañamos iniciativas de establecimiento vegetal y proyectos silvopastoriles adaptados a las necesidades del territorio.",
				},
				{
					title: "Asesoría técnica y jurídica",
					description:
						"Brindamos acompañamiento técnico y representación jurídica en procesos sancionatorios ambientales, integrando el componente normativo con el conocimiento técnico del proyecto.",
				},
				{
					title: "Estudios y actividades ambientales",
					description:
						"Realizamos toma de muestras de suelos y apoyamos la organización de actividades y eventos relacionados con gestión y educación ambiental.",
				},
			],
			context: {
				title: "Compensaciones ambientales",
				paragraphs: [
					"Nuestra experiencia en campo nos permite participar en procesos de compensación ambiental orientados a generar resultados medibles y sostenibles en el territorio.",
				],
			},
			gallery: [
				{
					src: environmentalImpactImage,
					alt: "Trabajo de manejo de material vegetal en un vivero",
					caption: "Manejo y cuidado de material vegetal.",
					width: 1800,
					height: 1200,
				},
				{
					src: restorationImage,
					alt: "Reservorio de agua rodeado por cobertura vegetal",
					caption: "Agua, suelo y vegetación como parte de una gestión integral.",
					width: 1600,
					height: 1200,
				},
			],
			contact: {
				heading: "¿Tienes un proyecto ambiental en marcha o estás por comenzar uno?",
				description:
					"Cuéntanos qué necesitas. Nuestro equipo puede ayudarte a identificar el acompañamiento adecuado para tu proyecto.",
			},
		},
	},
	{
		id: "forestry",
		slug: "forestales",
		name: "Servicios Forestales",
		description: "Manejo, conservación y aprovechamiento sostenible de los recursos forestales.",
		route: "/servicios/forestales",
		seo: {
			title: "Servicios Forestales en Colombia | Ancestral",
			description:
				"Acompañamos proyectos de manejo, intervención, recuperación y conservación de recursos forestales con conocimiento técnico y experiencia en campo.",
		},
		icons: {
			default: forestryIcon,
			green: forestryGreenIcon,
			navy: forestryNavyIcon,
			white: forestryWhiteIcon,
		},
		image: forestryImage,
		detail: {
			heroCopy:
				"Protegemos y gestionamos los recursos forestales combinando conocimiento técnico, experiencia en campo y acciones orientadas a la conservación.",
			valueProposition:
				"Acompañamos proyectos que requieren conocer, intervenir, recuperar o manejar coberturas vegetales y ecosistemas forestales de manera responsable.",
			capabilities: [
				{
					title: "Inventarios forestales",
					description:
						"Realizamos inventarios que permiten identificar y caracterizar los recursos forestales presentes en las áreas de intervención de cada proyecto.",
				},
				{
					title: "Manejo de fauna y regeneración vegetal",
					description:
						"Desarrollamos actividades de ahuyentamiento de fauna y traslado de brinzales como parte de los procesos de manejo y protección asociados a las intervenciones ambientales.",
				},
				{
					title: "Reforestación",
					description:
						"Ejecutamos procesos de reforestación orientados a recuperar coberturas vegetales y fortalecer la conservación y restauración de ecosistemas.",
				},
				{
					title: "Manejo de epífitas",
					description:
						"Realizamos actividades de traslado de epífitas cuando las condiciones ambientales y los requerimientos del proyecto así lo requieren.",
				},
				{
					title: "Mantenimiento de plantaciones",
					description:
						"Acompañamos las etapas posteriores al establecimiento mediante labores de mantenimiento que favorecen el desarrollo y permanencia de las plantaciones.",
				},
				{
					title: "Levantamiento de veda",
					description:
						"Apoyamos técnicamente los procesos asociados al levantamiento de veda de especies cuando resultan aplicables dentro del proyecto.",
				},
				{
					title: "Aprovechamientos forestales",
					description:
						"Desarrollamos actividades relacionadas con aprovechamientos forestales bajo criterios técnicos y de cumplimiento ambiental.",
				},
			],
			context: {
				title: "Restauración y compensación ambiental",
				paragraphs: [
					"La experiencia forestal de Ancestral es una parte fundamental de nuestra capacidad para ejecutar procesos de restauración y compensación ambiental con impacto real en el territorio.",
				],
			},
			gallery: [
				{
					src: restorationImage,
					alt: "Cobertura forestal junto a un reservorio de agua",
					caption: "Conservación de coberturas vegetales y sus ecosistemas.",
					width: 1600,
					height: 1200,
				},
				{
					src: environmentalImpactImage,
					alt: "Manejo de plántulas en un vivero de material vegetal",
					caption: "Producción y cuidado de material vegetal.",
					width: 1800,
					height: 1200,
				},
			],
			contact: {
				heading:
					"¿Tu proyecto requiere manejo, intervención o recuperación de recursos forestales?",
				description:
					"Cuéntanos sus características y conversemos sobre la mejor forma de acompañarlo.",
			},
		},
	},
	{
		id: "agricultural",
		slug: "agricolas",
		name: "Servicios Agrícolas",
		description: "Asesoría en obras agrícolas, manejo de tierras e insumos agrícolas.",
		route: "/servicios/agricolas",
		seo: {
			title: "Servicios Agrícolas en Colombia | Ancestral",
			description:
				"Desarrollamos soluciones para proyectos agrícolas mediante asesoría técnica, preparación de tierras, infraestructura, caracterización de suelos y apoyo operativo.",
		},
		icons: {
			default: agriculturalIcon,
			green: agriculturalGreenIcon,
			navy: agriculturalNavyIcon,
			white: agriculturalWhiteIcon,
		},
		image: agriculturalImage,
		detail: {
			heroCopy:
				"Acompañamos el desarrollo de proyectos agrícolas con soluciones orientadas al uso eficiente del suelo, el agua y la infraestructura productiva.",
			valueProposition:
				"Integramos asesoría técnica, conocimiento del territorio y apoyo operativo para fortalecer proyectos agrícolas desde su planificación hasta su ejecución.",
			capabilities: [
				{
					title: "Obras agrícolas y preparación de tierras",
					description:
						"Brindamos asesoría para obras agrícolas, manejo de aguas y preparación de terrenos de acuerdo con las condiciones y necesidades de cada proyecto.",
				},
				{
					title: "Infraestructura agrícola",
					description:
						"Apoyamos el diseño y construcción de infraestructura necesaria para mejorar la operación y productividad de proyectos agrícolas.",
				},
				{
					title: "Caracterización de suelos",
					description:
						"Realizamos procesos de caracterización que permiten comprender las condiciones del suelo y tomar decisiones técnicas mejor fundamentadas.",
				},
				{
					title: "Información y fotografía aérea",
					description:
						"Apoyamos procesos de caracterización territorial mediante herramientas de información y fotografía aérea aplicadas a las necesidades del proyecto.",
				},
				{
					title: "Suministro de insumos",
					description:
						"Facilitamos el suministro de insumos agrícolas requeridos para la ejecución y mantenimiento de las actividades productivas.",
				},
				{
					title: "Encerramientos perimetrales",
					description:
						"Desarrollamos soluciones de cerramiento adaptadas a las características y necesidades de las áreas de intervención.",
				},
			],
			context: {
				title: "Gestión responsable del territorio",
				paragraphs: [
					"El desarrollo productivo puede avanzar de la mano de una gestión responsable del territorio. Nuestro enfoque busca aportar soluciones que permitan aprovechar los recursos de manera eficiente y sostenible.",
				],
			},
			gallery: [
				{
					src: environmentalImpactImage,
					alt: "Trabajo técnico en un vivero de material vegetal",
					caption: "Acompañamiento técnico asociado al manejo vegetal.",
					width: 1800,
					height: 1200,
				},
			],
			contact: {
				heading: "¿Estás desarrollando o fortaleciendo un proyecto agrícola?",
				description:
					"Cuéntanos qué necesitas y evaluemos juntos las soluciones más adecuadas para tu proyecto.",
			},
		},
	},
	{
		id: "water-resources",
		slug: "recurso-hidrico",
		name: "Manejo del Recurso Hídrico",
		description: "Gestión, protección y aprovechamiento sostenible de fuentes hídricas.",
		route: "/servicios/recurso-hidrico",
		seo: {
			title: "Manejo del Recurso Hídrico en Colombia | Ancestral",
			description:
				"Acompañamos proyectos de planificación, protección y manejo sostenible del recurso hídrico, incluyendo acuíferos, vertimientos, cuencas y cauces.",
		},
		icons: {
			default: waterResourcesIcon,
			green: waterResourcesGreenIcon,
			navy: waterResourcesNavyIcon,
			white: waterResourcesWhiteIcon,
		},
		image: waterResourcesImage,
		detail: {
			heroCopy:
				"El agua es uno de los recursos esenciales de cualquier territorio y su gestión requiere conocimiento técnico, planificación y seguimiento.",
			valueProposition:
				"Acompañamos proyectos relacionados con la protección, ordenamiento y manejo sostenible del recurso hídrico, desde la planificación hasta las acciones de intervención y conservación.",
			capabilities: [
				{
					title: "Planes de manejo ambiental de sistemas acuíferos",
					description:
						"Brindamos asesoría técnica y acompañamiento en la elaboración y ejecución de planes orientados a la protección y manejo ambiental de sistemas acuíferos.",
				},
				{
					title: "Saneamiento y manejo de vertimientos",
					description:
						"Apoyamos la formulación y ejecución de planes de saneamiento y manejo de vertimientos de acuerdo con las necesidades de cada proyecto.",
				},
				{
					title: "Ordenamiento de cuencas",
					description:
						"Participamos en procesos asociados a Planes de Ordenamiento y Manejo de Cuencas Hidrográficas (POMCA) y Planes de Ordenamiento del Recurso Hídrico (PORH).",
				},
				{
					title: "Manejo de cauces y vertimientos",
					description:
						"Brindamos asesoría y apoyo técnico en actividades relacionadas con aforos de caudales y caracterización de vertimientos.",
				},
			],
			context: {
				title: "Una visión integral del recurso hídrico",
				paragraphs: [
					"La protección del recurso hídrico está directamente relacionada con la conservación de los ecosistemas que lo sostienen.",
					"Nuestra experiencia ambiental y territorial permite abordar estos procesos desde una visión integral que conecta agua, suelo, vegetación y comunidades.",
				],
			},
			gallery: [
				{
					src: restorationImage,
					alt: "Reservorio de agua integrado en un entorno vegetal",
					caption: "Protección del agua y de los ecosistemas que la sostienen.",
					width: 1600,
					height: 1200,
				},
				{
					src: institutionalTeamImage,
					alt: "Equipo técnico realizando trabajo de campo en una estructura hidráulica",
					caption: "Seguimiento técnico en campo.",
					width: 1600,
					height: 1200,
				},
			],
			contact: {
				heading: "¿Tu proyecto requiere planificación, protección o manejo del recurso hídrico?",
				description:
					"Cuéntanos el contexto y nuestro equipo podrá orientarte sobre el acompañamiento que necesitas.",
			},
		},
	},
	{
		id: "occupational-safety",
		slug: "seguridad-salud-trabajo",
		name: "Seguridad y Salud en el Trabajo",
		description: "Implementación de sistemas de gestión y auditorías para entornos seguros.",
		route: "/servicios/seguridad-salud-trabajo",
		seo: {
			title: "Seguridad y Salud en el Trabajo | Ancestral",
			description:
				"Diseñamos, implementamos y fortalecemos sistemas de Seguridad y Salud en el Trabajo, auditorías y procesos de gestión para organizaciones públicas y privadas.",
		},
		icons: {
			default: occupationalSafetyIcon,
			green: occupationalSafetyGreenIcon,
			navy: occupationalSafetyNavyIcon,
			white: occupationalSafetyWhiteIcon,
		},
		image: occupationalSafetyImage,
		detail: {
			heroCopy:
				"Entornos de trabajo seguros requieren prevención, planificación y sistemas de gestión que funcionen en la práctica.",
			valueProposition:
				"Acompañamos a organizaciones públicas y privadas en el diseño, implementación, evaluación y fortalecimiento de sus procesos de Seguridad y Salud en el Trabajo.",
			capabilities: [
				{
					title: "Sistemas de Gestión de Seguridad y Salud en el Trabajo",
					description:
						"Diseñamos e implementamos Sistemas de Gestión de Seguridad y Salud en el Trabajo (SG-SST) adaptados a las características y necesidades de cada organización.",
				},
				{
					title: "Sistemas de gestión",
					description:
						"Apoyamos el diseño e implementación de sistemas de gestión que permitan fortalecer procesos internos y promover mejores prácticas organizacionales.",
				},
				{
					title: "Auditorías",
					description:
						"Realizamos auditorías a Sistemas de Gestión de Calidad como herramienta para evaluar su funcionamiento e identificar oportunidades de mejora.",
				},
				{
					title: "Gestión del riesgo de desastres",
					description:
						"Acompañamos la formulación y desarrollo de Planes de Gestión del Riesgo de Desastres para entidades públicas y privadas (PGRDEPP).",
				},
			],
			context: {
				title: "Procesos claros y sostenibles",
				paragraphs: [
					"Nuestro objetivo es ayudar a las organizaciones a convertir los requerimientos de seguridad y gestión en procesos claros, aplicables y sostenibles dentro de su operación.",
				],
			},
			gallery: [
				{
					src: institutionalFieldWorkImage,
					alt: "Equipo con elementos de protección realizando una actividad técnica en campo",
					caption: "Trabajo técnico con medidas de protección en campo.",
					width: 1600,
					height: 1200,
				},
				{
					src: institutionalTeamImage,
					alt: "Equipo técnico inspeccionando una instalación durante una jornada de campo",
					caption: "Evaluación y seguimiento de actividades operativas.",
					width: 1600,
					height: 1200,
				},
			],
			contact: {
				heading: "¿Necesitas implementar, revisar o fortalecer tus sistemas de gestión?",
				description:
					"Cuéntanos qué necesita tu organización y conversemos sobre cómo podemos acompañarte.",
			},
		},
	},
] as const satisfies readonly ServiceDefinition[];

export function getServiceBySlug(serviceSlug: string | undefined): ServiceDefinition | undefined {
	return services.find((service) => service.slug === serviceSlug);
}
